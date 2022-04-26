import React, { useState } from "react";
import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { useAppSelector, RootState } from "../../../../../redux/store";

import { GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Tooltip, IconButton, CircularProgress } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import CheckIcon from "@mui/icons-material/Check";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DownloadIcon from "@mui/icons-material/Download";

import { TimeOff } from "types/timeoff";

import { useApiClient } from "../../../../../utils/client";
import queryClient from "../../../../../utils/queryCLient";
import api from "../../../../../services/api-endpoints";

import ConfirmationDialog from "../../../../../components/ConfirmationDialog/ConfirmationDialog";

import { timeOffsApprovedGridStyles } from "./timeOffsApprovedGrid-styles";

type Props = {
  params: GridRenderCellParams;
  rowId: string;
};

const TimeOffsApprovedGridActions: React.FC<Props> = ({ params, rowId }) => {
  const { id, roles } = useAppSelector((state: RootState) => state.user.user);
  const { name, userId, approved } = params.row;
  // * If the user is not admin nor owner of the time off action buttons are not displayed
  if (!roles.includes("Admin") && id !== userId) {
    return null;
  }
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isApprovedModalOpen, setIsApprovedModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(approved);

  const client = useApiClient();
  // * Extracting delete handler from react query
  const {
    mutate: deleteTimeOffFn,
    isLoading: isDeleteLoading,
    error: deleteError,
  } = useMutation<AxiosResponse<TimeOff>, AxiosError, string>(
    async (id: string) => {
      return await client.delete(api.timeOffs.deleteTimeOff(id));
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["pendingTimeOffs"]);
        setIsDeleteModalOpen(false);
      },
    }
  );
  // * Extracting approve handler from react query
  const {
    mutate: approveTimeOffFn,
    isLoading: isApproveLoading,
    error: approveError,
  } = useMutation<AxiosResponse<TimeOff>, AxiosError, string>(
    async (id: string) => {
      const res = await client.patch(api.timeOffs.updateTimeOff(id), {
        approved: true,
      });

      return res;
    },
    {
      onSuccess: () => {
        setIsApproved(true);
        queryClient.invalidateQueries(["timeoffs"]);
        queryClient.invalidateQueries(["pendingTimeOffs"]);
      },
    }
  );

  const handleApproveModalOpen = (isOpen: boolean) => {
    setIsApprovedModalOpen(isOpen);
  };

  const handleDeleteModalOpen = (isOpen: boolean) => {
    setIsDeleteModalOpen(isOpen);
  };

  const approveHandler = () => {
    approveTimeOffFn(rowId);
    setIsApprovedModalOpen(false);
  };
  const deleteHandler = () => {
    deleteTimeOffFn(rowId);
    setIsDeleteModalOpen(false);
  };

  if (rowId !== params.id) {
    return null;
  }

  return (
    <Box width="100%" display="flex" justifyContent="end">
      <Box sx={timeOffsApprovedGridStyles.actions}>
        <ConfirmationDialog
          isOpen={isApprovedModalOpen}
          handleCancel={() => {
            handleApproveModalOpen(false);
          }}
          handleConfirm={approveHandler}
          content={`Approve ${name}'s time off request ?`}
          error={approveError ? approveError.message : ""}
          confirmButtonLabel={"Approve"}
        />
        <ConfirmationDialog
          isOpen={isDeleteModalOpen}
          handleCancel={() => {
            handleDeleteModalOpen(false);
          }}
          handleConfirm={deleteHandler}
          content={`Are you sure your want to delete ${name}'s time off`}
          error={deleteError ? "Something went wrong" : ""}
          confirmButtonLabel={"Delete"}
        />
        <Tooltip title="Download" placement="bottom">
          <IconButton size="small">
            <DownloadIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Approve" placement="bottom">
          <IconButton
            size="small"
            onClick={() => {
              handleApproveModalOpen(true);
            }}
            disabled={isApproved}
          >
            {isApproveLoading ? (
              <CircularProgress color="primary" size={20} />
            ) : (
              <CheckIcon
                fontSize="small"
                color={isApproved ? "success" : "action"}
              />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Document" placement="bottom">
          <IconButton size="small">
            <ListAltIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="bottom">
          <IconButton size="small">
            <ModeEditIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete" placement="bottom">
          <IconButton
            size="small"
            onClick={() => {
              handleDeleteModalOpen(true);
            }}
          >
            {isDeleteLoading ? (
              <CircularProgress size={20} />
            ) : (
              <DeleteSweepIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
export default TimeOffsApprovedGridActions;
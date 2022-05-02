import React, { useState } from "react";
import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { useAppSelector, RootState } from "../../../../../redux/store";

import { GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Tooltip, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

import { TimeOff } from "types/timeoff";

import { useApiClient } from "../../../../../utils/client";
import queryClient from "../../../../../utils/queryCLient";
import api from "../../../../../services/api-endpoints";

import ConfirmationDialog from "../../../../../components/ConfirmationDialog/ConfirmationDialog";

import { timeOffsPendingGridStyles } from "./timeOffsPendingGrid-styles";

type Props = {
  params: GridRenderCellParams;
  rowId: string;
};

const TimeOffsPendingGridActions: React.FC<Props> = ({ params, rowId }) => {
  const { roles } = useAppSelector((state: RootState) => state.user.user);
  const { name } = params.row;
  // * If the user is not admin nor owner of the time off action buttons are not displayed
  if (!roles.includes("Admin")) {
    return null;
  }
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [approveModalOpen, setApproveModalOpen] = useState(false);

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
        setDeleteModalOpen(false);
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
        queryClient.invalidateQueries(["timeoffs"]);
        queryClient.invalidateQueries(["pendingTimeOffs"]);
        setApproveModalOpen(false);
      },
    }
  );

  const approveHandler = () => {
    approveTimeOffFn(rowId);
  };
  const deleteHandler = () => {
    deleteTimeOffFn(rowId);
  };

  if (rowId !== params.id) {
    return null;
  }

  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box sx={timeOffsPendingGridStyles.actions}>
        <ConfirmationDialog
          isOpen={approveModalOpen}
          isLoading={isApproveLoading}
          handleCancel={() => {
            setApproveModalOpen(false);
          }}
          handleConfirm={approveHandler}
          content={`Approve ${name}'s time off request ?`}
          error={approveError ? approveError.message : ""}
          confirmButtonLabel={"Approve"}
        />
        <ConfirmationDialog
          isOpen={deleteModalOpen}
          isLoading={isDeleteLoading}
          handleCancel={() => {
            setDeleteModalOpen(false);
          }}
          handleConfirm={deleteHandler}
          content={`Decline ${name}'s time off request ?`}
          error={deleteError ? "Something went wrong" : ""}
          confirmButtonLabel={"Decline"}
        />

        <Tooltip title="Approve" placement="bottom" sx={{ mr: 1 }}>
          <IconButton
            size="small"
            onClick={() => {
              setApproveModalOpen(true);
            }}
          >
            <CheckIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Decline" placement="bottom">
          <IconButton
            size="small"
            onClick={() => {
              setDeleteModalOpen(true);
            }}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
export default TimeOffsPendingGridActions;

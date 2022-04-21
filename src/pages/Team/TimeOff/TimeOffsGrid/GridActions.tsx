import React from "react";
import { useMutation } from "react-query";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Tooltip, IconButton, CircularProgress } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import CheckIcon from "@mui/icons-material/Check";
import ListAltIcon from "@mui/icons-material/ListAlt";

import ConfirmationDialog from "../../../../components/ConfirmationDialog/ConfirmationDialog";
import { useApiClient } from "../../../../utils/client";
import queryClient from "../../../../utils/queryCLient";
import api from "../../../../services/api-endpoints";
import { useAppSelector, RootState } from "../../../../redux/store";
import { TimeOff } from "types/timeoff";

import { styles } from "./timeOffsGrid-styles";

type Props = {
  params: GridRenderCellParams;
  rowId: string;
};

const GridActions: React.FC<Props> = ({ params, rowId }) => {
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [approveModalOpen, setApproveModalOpen] = React.useState(false);
  const { name, userId, approved } = params.row;
  const [isApproved, setIsApproved] = React.useState(approved);
  const { id, roles } = useAppSelector((state: RootState) => state.user.user);

  // If the user is not admin nor owner of the time off action buttons are not displayed
  if (!roles.includes("Admin") && id !== userId) {
    return null;
  }

  const client = useApiClient();

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
        queryClient.invalidateQueries(["timeoffs"]);
        setDeleteModalOpen(false);
      },
    }
  );

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
      },
    }
  );
  const handleApproveModalOpen = () => {
    setApproveModalOpen(true);
  };
  const handleApproveModalClose = () => {
    setApproveModalOpen(false);
  };
  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };
  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };
  const approveHandler = () => {
    approveTimeOffFn(rowId);
    setApproveModalOpen(false);
  };
  const deleteHandler = () => {
    deleteTimeOffFn(rowId);
    setDeleteModalOpen(false);
  };

  if (rowId !== params.id) {
    return null;
  }

  return (
    <Box sx={styles.actions}>
      <ConfirmationDialog
        isOpen={approveModalOpen}
        handleCancel={handleApproveModalClose}
        handleConfirm={approveHandler}
        content={`Approve ${name}'s time off request ?`}
        error={approveError ? approveError.message : ""}
        confirmButtonLabel={"Approve"}
      />
      <ConfirmationDialog
        isOpen={deleteModalOpen}
        handleCancel={handleDeleteModalClose}
        handleConfirm={deleteHandler}
        content={`Are you sure your want to delete ${name}'s time off`}
        error={deleteError ? "Something went wrong" : ""}
        confirmButtonLabel={"Delete"}
      />

      <Tooltip title="Approve" placement="bottom">
        <IconButton
          size="small"
          onClick={handleApproveModalOpen}
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
      <Tooltip title="Details" placement="bottom">
        <IconButton size="small">
          <ListAltIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit" placement="bottom">
        <IconButton size="small">
          <ModeEditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      {!isApproved && (
        <Tooltip title="Decline" placement="bottom">
          <IconButton size="small" onClick={handleDeleteModalOpen}>
            {isDeleteLoading ? (
              <CircularProgress size={20} />
            ) : (
              <DeleteSweepIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};
export default GridActions;

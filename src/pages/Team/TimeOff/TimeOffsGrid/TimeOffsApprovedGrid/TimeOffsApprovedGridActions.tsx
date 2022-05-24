import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { useAppSelector, RootState } from "../../../../../redux/store";

import { GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Tooltip, IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DownloadIcon from "@mui/icons-material/Download";

import { TimeOff } from "types/timeoff";

import { useApiClient } from "../../../../../utils/client";
import queryClient from "../../../../../utils/queryCLient";
import api from "../../../../../services/api-endpoints";

import ConfirmationDialog from "../../../../../components/ConfirmationDialog/ConfirmationDialog";
import CommonFormModal from "../../../../../components/CommonFormModal/CommonFormModal";
import TimeOffsCalendar from "../../TimeOffsCalendar/TimeOffsCalendar";

import { timeOffsApprovedGridStyles } from "./timeOffsApprovedGrid-styles";
import leftDraw from "../../../../../theme/assets/timeoff_draw_left.png";
import rightDraw from "../../../../../theme/assets/timeoff_draw_right.png";

type Props = {
  params: GridRenderCellParams;
  rowId: string;
};

const TimeOffsApprovedGridActions: React.FC<Props> = ({ params, rowId }) => {
  const { id, roles } = useAppSelector((state: RootState) => state.user.user);
  const { name, userId, uploaded } = params.row;

  // * If the user is not admin nor owner of the time off action buttons are not displayed
  if (!roles.includes("Admin") && id !== userId) {
    return null;
  }
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
        setIsDeleteModalOpen(false);
        queryClient.invalidateQueries(["timeoffs"]);
      },
    }
  );

  const handleEditModalOpen = useCallback(() => {
    setIsEditModalOpen(true);
  }, []);

  const handleEditModalCLose = useCallback(() => {
    setIsEditModalOpen(false);
  }, []);

  const handleDeleteModalOpen = useCallback(() => {
    setIsDeleteModalOpen(true);
  }, []);

  const handleDeleteModalClose = useCallback(() => {
    setIsDeleteModalOpen(false);
  }, []);

  const deleteHandler = useCallback(() => {
    deleteTimeOffFn(rowId);
  }, []);

  if (rowId !== params.id) {
    return null;
  }

  return (
    <Box width="100%" display="flex" justifyContent="end">
      <CommonFormModal
        leftPic={leftDraw}
        isOpen={isEditModalOpen}
        rightPic={rightDraw}
        closeModal={handleEditModalCLose}
      >
        <TimeOffsCalendar info={params.row} />
      </CommonFormModal>
      <Box sx={timeOffsApprovedGridStyles.actions}>
        <ConfirmationDialog
          isOpen={isDeleteModalOpen}
          isLoading={isDeleteLoading}
          handleCancel={handleDeleteModalClose}
          handleConfirm={deleteHandler}
          content={`Are you sure your want to delete ${name}'s time off`}
          error={deleteError ? "Something went wrong" : ""}
          confirmButtonLabel={"Delete"}
        />
        <Tooltip title="Download" placement="bottom">
          <Link to="/team/timeoffs/doc" state={params.row}>
            <IconButton size="small">
              <DownloadIcon fontSize="small" />
            </IconButton>
          </Link>
        </Tooltip>
        {uploaded && (
          <Tooltip title="Uploaded" placement="bottom">
            <ListAltIcon sx={{ mx: "5px" }} fontSize="small" color="primary" />
          </Tooltip>
        )}
        <Tooltip title="Edit" placement="bottom">
          <IconButton size="small" onClick={handleEditModalOpen}>
            <ModeEditIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete" placement="bottom">
          <IconButton size="small" onClick={handleDeleteModalOpen}>
            <DeleteSweepIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
export default TimeOffsApprovedGridActions;

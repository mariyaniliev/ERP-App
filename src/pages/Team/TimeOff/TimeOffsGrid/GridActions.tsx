import { Box, Tooltip, IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import CheckIcon from "@mui/icons-material/Check";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { styles } from "./timeOffsGrid-styles";
import React from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import ConfirmationDialog from "../../../../components/ConfirmationDialog/ConfirmationDialog";
import { useApiClient } from "../../../../utils/client";
import { useMutation } from "react-query";
import queryClient from "../../../../utils/queryCLient";
import api from "../../../../services/api-endpoints";
import { useAppSelector, RootState } from "../../../../redux/store";

type Props = {
  params: GridRenderCellParams;
  rowId: string;
};

const GridActions: React.FC<Props> = ({ params, rowId }) => {
  const { name, userId } = params.row;
  const { id, roles } = useAppSelector((state: RootState) => state.user.user);

  // If the user is not admin nor owner of the time off action buttons are not displayed
  if (!roles.includes("Admin") && id !== userId) {
    return null;
  }

  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const client = useApiClient();

  const { mutate, isLoading, error } = useMutation(
    (id: string) => {
      return client.delete(api.timeOffs.deleteTimeOff(id));
    },
    {
      onSuccess: () => {
        setDeleteModalOpen(false);
        queryClient.invalidateQueries(["timeoffs"]);
      },
    }
  );

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };
  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };
  const deleteHandler = () => {
    mutate(rowId);
  };
  if (rowId !== params.id) {
    return null;
  }

  return (
    <Box sx={styles.actions}>
      <ConfirmationDialog
        isOpen={deleteModalOpen}
        handleCancel={handleDeleteModalClose}
        handleConfirm={deleteHandler}
        isLoading={isLoading}
        content={`Are you sure your want to delete ${name}'s time off`}
        error={error ? "Something went wrong" : ""}
      />
      <Tooltip title="Approve" placement="bottom">
        <IconButton size="small">
          <CheckIcon fontSize="small" />
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
      <Tooltip title="Delete" placement="bottom">
        <IconButton size="small" onClick={handleDeleteModalOpen}>
          <DeleteSweepIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default GridActions;

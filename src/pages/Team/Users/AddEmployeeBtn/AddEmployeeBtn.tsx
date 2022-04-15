import React, { useState } from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { AddEmployeeForm } from "../AddEmployeeForm/AddEmployeeForm";
import { Button, Box } from "../../../../design-system/index";
import { Modal } from "../../../../design-system/Modal/Modal";
import { Backdrop } from "../../../../design-system/Modal/Backdrop";
import { styles } from "./addEmployee-styles";

const AddEmployeeBtn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={styles.btnContainer}>
      <Button onClick={handleOpen}>
        <PersonAddAltIcon /> Add Employee
      </Button>
      <Modal
        open={open}
        BackdropComponent={Backdrop}
        BackdropProps={{ onClick: () => handleClose() }}
        modalStyles={styles.modalContainer}
      >
        <AddEmployeeForm />
      </Modal>
    </Box>
  );
};

export default AddEmployeeBtn;

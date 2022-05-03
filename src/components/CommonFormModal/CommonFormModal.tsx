import React from "react";
import ReactDom from "react-dom";

import { Box } from "../../design-system";

import { CommonFormModalProps } from "./commonFormModal-types";

import { styles } from "./commonFormModal-styles";

const CommonFormModal: React.FC<CommonFormModalProps> = ({
  children,
  leftPic,
  rightPic,
  isOpen,
  closeModal,
}) => {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <Box sx={styles.modal}>
      <Box onClick={closeModal} sx={styles.overlay}></Box>
      <Box sx={styles.mainContainer}>
        <Box sx={styles.leftRow}>
          <Box sx={styles.logoContainer}>
            <img style={styles.image} src={leftPic} alt="Drawing" />
          </Box>
        </Box>
        {children}
        <Box sx={styles.rightRow}>
          <Box sx={styles.logoContainer}>
            <img style={styles.image} src={rightPic} alt="Drawing" />
          </Box>
        </Box>
      </Box>
    </Box>,
    document.getElementById("portal")
  );
};
export default React.memo(CommonFormModal);

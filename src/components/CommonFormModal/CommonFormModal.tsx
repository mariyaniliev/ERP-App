import React from "react";
import ReactDom from "react-dom";
import { Box } from "@mui/material";
import { styles } from "./commonFormModal-styles";

type Props = {
  children: React.ReactNode;
  leftPic: string;
  rightPic: string;
};

const CommonForm: React.FC<Props> = ({ children, leftPic, rightPic }) => {
  return ReactDom.createPortal(
    <Box
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Box sx={styles.overlay}></Box>
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
export default CommonForm;

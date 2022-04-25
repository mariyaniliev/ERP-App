import React from "react";
import { Box } from "@mui/material";
import { styles } from "./commonForm-styles";

type Props = {
  children: React.ReactNode;
  leftPic: string;
  rightPic: string;
};

const CommonForm: React.FC<Props> = ({ children, leftPic, rightPic }) => {
  return (
    <Box>
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
    </Box>
  );
};
export default CommonForm;

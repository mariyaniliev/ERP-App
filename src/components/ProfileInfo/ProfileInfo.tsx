import React from "react";
import { Typography, Avatar, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { THEME_COLORS } from "../../theme/theme-constants";

const avatarStyles = {
  width: "30px",
  height: "30px",
  background: THEME_COLORS.primaryGradient,
} as const;

interface ProfileInfoProps {
  name: string;
}

const ProfileInfo = (props: ProfileInfoProps) => {
  const { name } = props;
  return (
    <Stack direction="row" spacing={1} alignItems="center" marginLeft="20px">
      <Avatar component={PersonIcon} sx={avatarStyles} />
      <Typography>{name}</Typography>
    </Stack>
  );
};
export default ProfileInfo;

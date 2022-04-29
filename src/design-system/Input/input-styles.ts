import { styled } from "@mui/system";
import { THEME_COLORS } from "../../theme/theme-constants";

export const StyledInputElement = styled("input")({
  width: "100%",
  height: "18px",
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  color: THEME_COLORS.grey04,
  fontFamily: "Open Sans, sans-serif",
  border: "none",
  borderRadius: "16px",
  boxShadow: `0px 3px 6px ${THEME_COLORS.grey05}`,
  padding: "14px 10px",
  "&:hover": {
    color: THEME_COLORS.purple,
  },
  "&:focus": {
    outline: "none",
    color: THEME_COLORS.purple,
  },
});

import { styled } from "@mui/system";
import { THEME_COLORS } from "../../theme/theme-constants";

export const StyledInputElement = styled("input")({
  width: "100%",
  height: "32px",
  fontSize: "12px",
  fontWeight: "600",
  fontFamily: "Open Sans, sans-serif",
  color: THEME_COLORS.grey03,
  background: THEME_COLORS.light,
  border: "none",
  borderRadius: "15px",
  padding: "6px 10px",
  "&:hover": {
    color: THEME_COLORS.purple,
  },
  "&:focus": {
    outline: "none",
    color: THEME_COLORS.purple,
  },
});

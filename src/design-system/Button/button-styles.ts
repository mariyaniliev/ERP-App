import { styled } from "@mui/system";
import { THEME_COLORS } from "../../theme/theme-constants";

export const StyledButtonElement = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "174px",
  height: "32px",
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "Open Sans, sans-serif",
  color: THEME_COLORS.white,
  background: THEME_COLORS.purple,
  border: "none",
  borderRadius: "15px",
  cursor: "pointer",
});

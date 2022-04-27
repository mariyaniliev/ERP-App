import { styled } from "@mui/system";
import { THEME_COLORS } from "../../theme/theme-constants";
export const StyledInputElement = styled("input")({
  width: "100%",
  color: THEME_COLORS.grey03,
  boxShadow: `0px 3px 6px ${THEME_COLORS.grey05}`,
  height: "38px",
  border: "none",
  outline: "none",
  borderRadius: "32px",
  paddingLeft: "45px",
  paddingRight: "25px",
});

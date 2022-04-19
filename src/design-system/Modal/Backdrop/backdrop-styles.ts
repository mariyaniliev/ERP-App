import { styled } from "@mui/system";
import { BackdropUnstyled } from "@mui/base";
import { THEME_COLORS } from "../../../theme/theme-constants";

export const StyledBackdrop = styled(BackdropUnstyled)({
  position: "fixed",
  zIndex: "-1",
  right: "0",
  bottom: "0",
  top: "0",
  left: "0",
  background: THEME_COLORS.white,
});

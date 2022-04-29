import ModalUnstyled from "@mui/base/ModalUnstyled";
import { styled } from "@mui/system";

export const StyledModal = styled(ModalUnstyled)({
  position: "fixed",
  zIndex: "2000",
  right: "525px",
  bottom: "50px",
  top: "50px",
  left: "525px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
  height: "600px",
});

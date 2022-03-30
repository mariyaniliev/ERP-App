import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { THEME_COLORS } from "../../../theme/theme-constants";

const blue = {
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

export const CustomButtonRoot = styled("button")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${THEME_COLORS.aquaBlue};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${THEME_COLORS.purple};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${THEME_COLORS.aquaBlue};
    box-shadow: 0 4px 20px 0 ${THEME_COLORS.aquaBlue},
      0 0 0 5px ${THEME_COLORS.aquaBlue};
    outline: none;
  }
`;

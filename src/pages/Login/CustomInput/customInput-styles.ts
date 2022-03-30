import { styled } from "@mui/system";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

export const StyledInputElement = styled("input")`
  width: 320px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${grey[900]};
  background: ${grey[50]};
  border: 1px solid ${grey[300]};
  border-radius: 8px;
  padding: 12px 12px;

  &:hover {
    background: ${grey[100]};
    border-color: ${grey[400]};
  }

  &:focus {
    outline: 3px solid ${blue[100]};
  }
`;

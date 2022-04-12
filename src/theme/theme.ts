import { createTheme } from "@mui/material/styles";
import typographyStyles from "./typography-styles";
import paletteStyles from "./palette-styles";
const appTheme = createTheme({
  palette: paletteStyles,
  typography: typographyStyles,
});

export default appTheme;

import {
  TabsUnstyled,
  TabsListUnstyled,
  TabUnstyled,
  tabUnstyledClasses,
} from "@mui/base";
import { styled } from "@mui/system";
import { THEME_COLORS } from "../../theme/theme-constants";

const StyledTabs = styled(TabsUnstyled)({
  padding: "30px 25px 0px 25px",
});

const StyledTabsList = styled(TabsListUnstyled)({
  display: "flex",
  justifyContent: "center",
  borderBottom: `3px solid rgba(0, 0, 0, 0.1)`,
});

const StyledTab = styled(TabUnstyled)({
  fontFamily: "Open Sans, sans-serif",
  position: "relative",
  height: "47px",
  padding: "0px 50px",
  background: "transparent",
  border: "none",
  color: `${THEME_COLORS.grey02}`,
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    background: "rgba(0, 0, 0, 0.1)",
  },
  "&::before": {
    content: "''",
    position: "absolute",
    bottom: "-3px",
    left: "0",
    width: "3px",
    height: "2.5px",
    transform: "scaleX(0)",
    transition: "transform .3s ",
  },
  [`&.${tabUnstyledClasses.selected}`]: {
    color: `${THEME_COLORS.purple}`,
  },
  [`&.${tabUnstyledClasses.selected}::before`]: {
    transform: "scaleX(1)",
    width: "100%",
    background: `${THEME_COLORS.purple}`,
  },
});

export { StyledTabs, StyledTabsList, StyledTab };

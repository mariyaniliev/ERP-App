import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import { THEME_COLORS } from "../../theme/theme-constants";

export const StyledButton = styled("button")({
  width: "75px",
  height: "32px",
  borderRadius: "15px",
  border: "none",
  background: THEME_COLORS.light,
  color: THEME_COLORS.grey04,
  "&:hover": {
    color: THEME_COLORS.purple,
    cursor: "pointer",
  },

  // &.${selectUnstyledClasses.focusVisible} {
  //   outline: 3px solid ${
  //     theme.palette.mode === "dark" ? blue[600] : blue[100]
  //   };
  // }

  //   [`&.${selectUnstyledClasses.expanded}`]: {
  //     "&::after": {
  //       content: "▴",
  //     },
  //   },
  "&::after": {
    content: "\00A7",
  },
});

export const StyledListbox = styled("ul")({
  fontSize: "0.875rem",
  boxSizing: "border-box",
  padding: "15px",
  margin: "10px 0",
  boxShadow: `0px 3px 6px ${THEME_COLORS.grey05}`,
  background: THEME_COLORS.white,
  borderRadius: "30px",
  color: THEME_COLORS.grey03,
  overflow: "auto",
  outline: "0px",
});

export const StyledOption = styled(OptionUnstyled)({
  listStyle: "none",
  padding: "8px",
  borderRadius: "15px",
  cursor: "pointer",
  "&:last-of-type": {
    borderBottom: "none",
  },
  [`&.${optionUnstyledClasses.selected}`]: {
    backgroundColor: THEME_COLORS.purple,
    color: THEME_COLORS.purple,
  },
  [`&.${optionUnstyledClasses.highlighted}`]: {
    backgroundColor: THEME_COLORS.purple,
    color: THEME_COLORS.purple,
  },
  [`&.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected}`]:
    {
      backgroundColor: "transparent",
      color: THEME_COLORS.purple,
    },
  [`&.${optionUnstyledClasses.disabled}`]: {
    color: THEME_COLORS.purple,
  },
  [`&:hover:not(.${optionUnstyledClasses.disabled})`]: {
    color: THEME_COLORS.purple,
    cursor: "pointer",
  },
});

export const StyledPopper = styled(PopperUnstyled)({
  zIndex: 1,
});

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface MenuListItem {
  content: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">> & {
    muiName: string;
  };
  section: string;
}
export interface MenuListProps {
  menuList: MenuListItem[];
  open: boolean;
}

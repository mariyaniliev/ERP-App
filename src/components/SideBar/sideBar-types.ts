interface MenuListItem {
  content: string;
  icon: any;
  section: string;
}
export interface MenuListProps {
  menuList: MenuListItem[];
  open: boolean;
}

import Group from "@mui/icons-material/Group";
import WorkOutline from "@mui/icons-material/WorkOutline";
import PinDrop from "@mui/icons-material/PinDrop";
import EventNote from "@mui/icons-material/EventNote";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const sideBarSectionsTop = [
  { content: "Team", section: "/team", icon: Group },
  {
    content: "Human Resources",
    section: "/hr",
    icon: PersonSearchOutlinedIcon,
  },
  {
    content: "Business Operations",
    section: "/bo",
    icon: WorkOutline,
  },
  { content: "Office", section: "/office", icon: PinDrop },

  {
    content: "Accounting",
    section: "/accounting",
    icon: EventNote,
  },
];

export const sideBarSectionsBottom = [
  { content: "About", section: "/about", icon: InfoOutlinedIcon },
  { content: "System", section: "/system", icon: Settings },
  { content: "Log out", section: "/logout", icon: Logout },
];

export const TeamSectionSubPages = [
  { name: "Users", urlIdParam: "users", icon: PeopleIcon },
  { name: "Time Offs", urlIdParam: "timeoffs", icon: AccessTimeIcon },
  { name: "Personal Info", urlIdParam: "personalInfo", icon: InfoIcon },
];

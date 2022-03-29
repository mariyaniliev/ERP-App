import React, { useEffect } from "react";
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store";
import { useNavigate, Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";
import { switchSubpage } from "../../redux/reducer/subpage";
import { StyledTabs, StyledTabsList, StyledTab } from "./teamSection-styles";

const TeamSection = () => {
  const { subpage } = useAppSelector((state: RootState) => state.subpage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const TeamSectionSubPages = [
    { name: "Users", urlIdParam: "users", icon: PeopleIcon },
    { name: "Time Offs", urlIdParam: "timeoffs", icon: AccessTimeIcon },
    { name: "Personal Info", urlIdParam: "personalInfo", icon: InfoIcon },
  ];

  useEffect(() => {
    navigate(TeamSectionSubPages[subpage].urlIdParam);
  }, [subpage]);

  const handleChange = (event: React.SyntheticEvent, newSubpage: number) => {
    dispatch(switchSubpage(newSubpage));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <StyledTabs value={subpage} onChange={handleChange}>
        <StyledTabsList>
          {TeamSectionSubPages.map((subpage) => (
            <StyledTab key={subpage.name}>
              {<subpage.icon />}
              {subpage.name}
            </StyledTab>
          ))}
        </StyledTabsList>
      </StyledTabs>
      <Outlet />
    </Box>
  );
};

export default TeamSection;

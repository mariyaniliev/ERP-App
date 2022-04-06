import React, { useEffect } from "react";
import { RootState, useAppSelector } from "../../redux/store";
import { useNavigate, Outlet } from "react-router-dom";
import { Box } from "../../design-system";
import { switchSubpageActions } from "../../redux/reducer/subpage";
import { TeamSectionSubPages } from "../../services/navigation-items-constants";
import { StyledTabs, StyledTabsList, StyledTab } from "./team-styles";

const Team = () => {
  const { subpage } = useAppSelector((state: RootState) => state.subpage);
  const { switchSubpage } = switchSubpageActions();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(TeamSectionSubPages[subpage].urlIdParam);
  }, [subpage]);

  const handleChange = (event: React.SyntheticEvent, newSubpage: number) => {
    switchSubpage(newSubpage);
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

export default Team;

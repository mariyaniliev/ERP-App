import React, { useEffect } from "react";
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store";
import { useNavigate, Outlet } from "react-router-dom";
import { Tabs, Tab, Box } from "@mui/material";
import { switchSubpage } from "../../redux/reducer/subpage";

const TeamSection = () => {
  const { subpage } = useAppSelector((state: RootState) => state.subpage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const TeamSectionSubPages = [
    { name: "Users", urlIdParam: "users" },
    { name: "Time Offs", urlIdParam: "timeoffs" },
    { name: "Personal Info", urlIdParam: "personalInfo" },
  ];

  useEffect(() => {
    navigate(TeamSectionSubPages[subpage].urlIdParam);
  }, [subpage]);

  const handleChange = (event: React.SyntheticEvent, newSubpage: number) => {
    dispatch(switchSubpage(newSubpage));
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={subpage} onChange={handleChange} centered>
        {TeamSectionSubPages.map((subpage) => (
          <Tab key={subpage.name} label={subpage.name} />
        ))}
      </Tabs>
      <Outlet />
    </Box>
  );
};

export default TeamSection;

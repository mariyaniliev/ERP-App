import React from "react";

import { useScrollTrigger, Slide } from "../../design-system";

const HideOnScroll = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;

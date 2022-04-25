import { Grow } from "../../design-system";
import React from "react";

const GrowAnimation: React.FC = ({ children }) => {
  return (
    <Grow in={true} timeout={400}>
      {<div>{children}</div>}
    </Grow>
  );
};

export default GrowAnimation;

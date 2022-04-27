import React from "react";

import { Grow } from "../../design-system";

const GrowAnimation: React.FC = ({ children }) => {
  return (
    <Grow in={true} timeout={400}>
      {<div>{children}</div>}
    </Grow>
  );
};

export default GrowAnimation;

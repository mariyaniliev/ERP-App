import React, { Suspense, useState } from "react";
import { Box } from "../../../design-system";
import TimeOffsLoader from "./TimeOffsLoader";

const SearchBar = React.lazy(() => import("./SearchBar/SearchBar"));
const TimeOffsGrid = React.lazy(() => import("./TimeOffsGrid/TimeOffsGrid"));

const Users = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(10);

  return (
    <Box px="25px" py={5} width="100%" display="flex" justifyContent="center">
      <Box width="1632px">
        <Suspense fallback={<TimeOffsLoader />}>
          <SearchBar
            setData={setData}
            setIsLoading={setIsLoading}
            limit={limit}
            setLimit={setLimit}
          />

          <TimeOffsGrid timeoffs={data} isLoading={isLoading} limit={limit} />
        </Suspense>
      </Box>
    </Box>
  );
};
export default Users;

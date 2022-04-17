import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styles } from "./timeOffsGrid-styles";
import { useApiClient } from "../../../../utils/client";
import { columns } from "./TimeOffGridHelpers";
import { transformData } from "./transformData";

const UsersGrid = () => {
  const client = useApiClient();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTimeOffs = async () => {
      const { data } = await client.get("/timeoffs");
      setData(transformData(data.data));
    };
    fetchTimeOffs();
  }, []);

  return (
    <DataGrid
      pageSize={5}
      rowsPerPageOptions={[5, 10, 20]}
      disableColumnMenu={true}
      sx={styles.grid}
      columns={columns}
      pagination
      rows={data || []}
      autoHeight
      autoPageSize
      disableSelectionOnClick
    />
  );
};
export default UsersGrid;

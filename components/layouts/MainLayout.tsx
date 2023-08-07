import { Box } from "@mui/material";
import { ReactElement } from "react";

const MainLayout = (page: ReactElement) => {
  return (
    <>
      <Box>Main layout</Box>
      {page}
    </>
  );
};

export default MainLayout;

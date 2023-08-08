import { Box, CssBaseline } from "@mui/material";
import { ReactElement } from "react";
import HeaderComponent from "../header";

const MainLayout = (page: ReactElement) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HeaderComponent />
        {page}
      </Box>
    </>
  );
};

export default MainLayout;

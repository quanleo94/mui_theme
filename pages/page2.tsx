import MainLayout from "@/components/layouts/MainLayout";
import { MyNextPage } from "@/components/types/MyNextPage";
import { Box } from "@mui/material";

const Page2: MyNextPage = () => {
  return (
    <>
      <Box width={"100px"} height={"100px"}>
        Page 2
      </Box>
    </>
  );
};

export default Page2;
Page2.layout = MainLayout;

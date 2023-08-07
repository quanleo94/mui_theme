import MapLayout from "@/components/layouts/MapLayout";
import { MyNextPage } from "@/components/types/MyNextPage";
import { Button } from "@mui/material";

const Page1: MyNextPage = () => {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
};

Page1.layout = MapLayout;
export default Page1;

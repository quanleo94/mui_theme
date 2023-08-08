// material-ui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// assets
// import { IconMenu2 } from "@tabler/icons";
import LogoSection from "./LogoSection";
import MenuComponent from "./MenuComponent";
import { useRecoilState } from "recoil";
import { OpenLeftMenu } from "@/store";
import ProfileSection from "./ProfileSection";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  const theme = useTheme();
  //const [openMenu, setOpenMenu] = useRecoilState<string>(OpeningMenu);
  const [openLeftMenu, setOpenLeftMenu] = useRecoilState<boolean>(OpenLeftMenu);

  const handleLeftDrawerToggle = () => {
    setOpenLeftMenu(!openLeftMenu);
    console.log("handleLeftDrawerToggle : ", openLeftMenu);
  };

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        <MenuComponent handleLeftDrawerToggle={handleLeftDrawerToggle} />
      </Box>

      {/* header search */}
      {/*<SearchSection />*/}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      {/*<NotificationSection />
      <ProfileSection />*/}
      <ProfileSection />
    </>
  );
};

export default Header;

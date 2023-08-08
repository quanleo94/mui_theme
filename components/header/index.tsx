import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";
import Header from "./Header";
import { OpenLeftMenu, OpeningMenu } from "@/store";
import { useRecoilState, useRecoilValue } from "recoil";

const HeaderComponent = () => {
  const theme = useTheme();
  const openLeftMenu = useRecoilValue<boolean>(OpenLeftMenu);

  return (
    <>
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: openLeftMenu ? theme.transitions.create("width") : "none",
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderComponent;

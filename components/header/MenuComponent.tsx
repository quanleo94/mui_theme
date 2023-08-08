import { Avatar, ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { commonAvatar, mediumAvatar } from "@/themes/custom";
import { IconMenu2 } from "@tabler/icons";

const MenuComponent = ({
  handleLeftDrawerToggle,
}: {
  handleLeftDrawerToggle: () => void;
}) => {
  const theme = useTheme();
  return (
    <>
      <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
        <Avatar
          variant="rounded"
          sx={{
            ...commonAvatar,
            ...mediumAvatar,
            transition: "all .2s ease-in-out",
            background: theme.palette.secondary.light,
            color: theme.palette.secondary.dark,
            "&:hover": {
              background: theme.palette.secondary.dark,
              color: theme.palette.secondary.light,
            },
          }}
          onClick={handleLeftDrawerToggle}
          color="inherit"
        >
          <IconMenu2 stroke={1.5} size="1.3rem" />
        </Avatar>
      </ButtonBase>
    </>
  );
};

export default MenuComponent;

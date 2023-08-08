// assets
import { Menu } from "@/types/menuItem";
import { IconUser, IconKey } from "@tabler/icons";

// constant
const icons = { IconUser, IconKey };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const account: Menu = {
  id: "account",
  title: "Account",
  children: [
    {
      id: "profile",
      title: "Profile",
      url: "/profile",
      icon: icons.IconUser,
      breadcrumbs: false,
    },
    {
      id: "settings",
      title: "Settings",
      url: "/settings",
      icon: icons.IconKey,
      breadcrumbs: false,
    },
  ],
};

export default account;

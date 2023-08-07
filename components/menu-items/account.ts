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
      id: "password",
      title: "Password",
      url: "/password",
      icon: icons.IconKey,
      breadcrumbs: false,
    },
  ],
};

export default account;

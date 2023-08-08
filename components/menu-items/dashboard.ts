// assets
import { Menu } from "@/types/menuItem";
import {
  IconDashboard,
  IconChartBar,
  IconHome,
  IconChecklist,
} from "@tabler/icons";

// constant
const icons = { IconDashboard, IconChartBar, IconHome, IconChecklist };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard: Menu = {
  id: "dashboard",
  title: "Dashboard",
  children: [
    {
      id: "user",
      title: "User",
      url: "/user/list",
      icon: icons.IconHome,
      breadcrumbs: false,
    },
    {
      id: "following",
      title: "Following",
      url: "/user/following",
      icon: icons.IconChecklist,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;

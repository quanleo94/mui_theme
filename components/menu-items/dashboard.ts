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
      id: "room",
      title: "Room",
      url: "/room/list",
      icon: icons.IconHome,
      breadcrumbs: false,
    },
    {
      id: "following",
      title: "Following",
      url: "/room/following",
      icon: icons.IconChecklist,
      breadcrumbs: false,
    },
    {
      id: "statistics",
      title: "Statistics",
      url: "/room/statistics",
      icon: icons.IconChartBar,
      breadcrumbs: false,
    },
    {
      id: "benckmark",
      title: "Benchmark",
      url: "/room/benckmark",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;

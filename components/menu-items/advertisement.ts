// assets
import { Menu } from "@/types/menuItem";
import { IconChartBar, IconListCheck } from "@tabler/icons";

// constant
const icons = { IconChartBar, IconListCheck };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const advertisement: Menu = {
  id: "advertisement",
  title: "Advertisement",
  children: [
    {
      id: "list",
      title: "List",
      url: "/ad/list",
      icon: icons.IconListCheck,
      breadcrumbs: false,
    },
    {
      id: "statistics",
      title: "Statistics",
      url: "/ad/statistics",
      icon: icons.IconChartBar,
      breadcrumbs: false,
    },
  ],
};

export default advertisement;

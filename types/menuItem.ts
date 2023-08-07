export type Menu = {
  id: string;
  title: string;
  children: MenuItem[];
};

export type MenuItem = {
  id: string;
  title: string;
  url: string;
  icon: string;
  breadcrumbs: boolean;
};

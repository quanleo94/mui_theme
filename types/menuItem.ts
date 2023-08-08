export type Menu = {
  id: string;
  title: string;
  children: MenuItem[];
};

export type MenuItem = {
  id: string | number;
  title: string;
  url: string;
  icon: any;
  breadcrumbs?: boolean;
};

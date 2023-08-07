import MapLayout from "./MapLayout";
import MainLayout from "./MainLayout";
export const Layouts = {
  Main: MainLayout,
  Map: MapLayout,
};
export type LayoutKeys = keyof typeof Layouts;

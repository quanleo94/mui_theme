import { atom } from "recoil";

export const OpeningMenu = atom<string>({
  key: "menuOpening",
  default: "/profile",
});

export const OpenLeftMenu = atom<boolean>({
  key: "openLeftMenu",
  default: true,
});

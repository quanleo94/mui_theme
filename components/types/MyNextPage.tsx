// components/common/types.tsx
import { NextPage } from "next";
import { ReactElement } from "react";

export type MyNextPage = NextPage & {
  layout?: (page: ReactElement) => JSX.Element;
};

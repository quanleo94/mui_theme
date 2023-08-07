import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";
import "@/styles/style.scss";
import { LayoutKeys, Layouts } from "@/components/layouts";
import { NextComponentType, NextPageContext } from "next";
import MapLayout from "@/components/layouts/MapLayout";
import { MyNextPage } from "@/components/types/MyNextPage";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: MyNextPage;
}

// export type MyAppProps = AppProps & {
//   emotionCache?: EmotionCache;
//   Component: NextComponentType<NextPageContext, any, any> & {
//     Layout: LayoutKeys;
//   };
// };

export default function App(props: MyAppProps) {
  // If there's no emotionCache rendered by the server, use the clientSideEmotionCache
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { layout = MapLayout } = Component;

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        {layout(<Component {...pageProps} />)}
        {/* <Component {...pageProps} /> */}
      </CacheProvider>
    </StyledEngineProvider>
  );
}

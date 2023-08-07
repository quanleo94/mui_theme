import MainLayout from "@/components/layouts/MainLayout";
import { MyNextPage } from "@/components/types/MyNextPage";
import "@/styles/style.scss";
import theme from "@/themes";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: MyNextPage;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { layout = MainLayout } = Component;

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>{layout(<Component {...pageProps} />)}</RecoilRoot>
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}

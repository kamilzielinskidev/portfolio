import type { AppProps } from "next/app";
import 'global.css';
import '@fontsource/fira-code';

import { MaxWidthContainer } from 'common/lib/components/MaxWidthContainer';
import { ThemeProvider } from 'common/lib/components/ThemeProvider';
import { AppNavigation } from 'modules/navigation/lib/components/AppNavigation';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kamil Zieliński portfolio</title>
        <meta name="description" content="Kamil Zieliński personal portfolio" />
      </Head>
      <ThemeProvider>
        <MaxWidthContainer>
          <AppNavigation />
        </MaxWidthContainer>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

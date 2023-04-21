import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import { ConfirmationProvider } from 'dh-marvel/components/context/ConfirmationDataProvider';
import { theme } from "dh-marvel/styles/material-theme";

function MyApp({ Component, pageProps }: AppProps) {

  const Layout = (Component as any).Layout || LayoutGeneral;

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConfirmationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfirmationProvider>
      <style jsx global>{`
              /* Other global styles such as 'html, body' etc... */

              #__next {
                height: 100%;
              }
            `}</style>
    </ThemeProvider>)
}

export default MyApp

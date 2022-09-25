import type { AppProps } from 'next/app';
import theme from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

import Header from '../components/Header';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FKJ3JMQ9Y6" />
      <Script id="goggle-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FKJ3JMQ9Y6');`}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

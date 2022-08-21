import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* App Header */}
      <Head>
        <title>Carduo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

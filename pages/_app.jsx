import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>News App</title>
        <meta name="description" content="Aplicación de noticias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>🗞️ news api</header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

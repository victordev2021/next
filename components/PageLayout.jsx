import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function PageLayout({ children, title = "NewsApp" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Aplicación de noticias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>🗞️ news api</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
      <style>
        {`
        header{
          padding: 20px;
          display:flex;
          justify-content: space-between;
        }
        `}
      </style>
    </>
  );
}

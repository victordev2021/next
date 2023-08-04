import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>vat-app</title>
      </Head>
      <h1>Mi primer app nextjs desde cero.</h1>
    </div>
  );
}

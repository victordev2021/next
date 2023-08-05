import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";

const API_KEY = "eeb5fe84809f49ed89fa7c917df1f644";

export default function Home({ articles }) {
  // const router = useRouter();
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length == 0 && <p>Loading...</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <img
                src={article.urlToImage}
                alt={`Image for the article${article.title}`}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}
export async function getServerSideProps() {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2023-07-04&sortBy=publishedAt&apiKey=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Bearer-Token": `${API_KEY}`,
      },
    }
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}

import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

const firstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <h1>First POST</h1>
      <h2>
        <Link href="/">
          <a>Go to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default firstPost;

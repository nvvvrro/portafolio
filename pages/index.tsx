import type { NextPage } from "next";
import Head from "next/head";
import { siteTitle, Layout } from "@components";
import styles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { Navbar } from "@components";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface NextPageProps {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}
const Home: NextPage<NextPageProps> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.headingMd}>
        <p>
          Hola, soy Marcelo, Un placer conocerte, Bienvenido a mi blog. Aquí
          podrás encontrar projectos, trabajos y artículos sobre el desarrollo
          web con distintas tecnologías. Espero que te encuentres en el lugar
          correcto.
        </p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

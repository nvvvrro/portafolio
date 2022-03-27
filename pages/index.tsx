import type { NextPage } from "next";
import Head from "next/head";
import { siteTitle, Layout, Navbar } from "components";
import { getSortedPostsData } from "../lib/posts";

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
      <section>
        <p>
          Hola, soy Marcelo, Un placer conocerte, Bienvenido a mi blog. Aquí
          podrás encontrar projectos, trabajos y artículos sobre el desarrollo
          web con distintas tecnologías. Espero que te encuentres en el lugar
          correcto.
        </p>
      </section>
      <section >
        <h2 >Blog</h2>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li  key={id}>
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

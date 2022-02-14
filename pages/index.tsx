import type { NextPage } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hola, soy Marcelo. Un placer conocerte. Desde que comencé mi viaje
          como Informatico hace casi 2 años, he trabajado a
          distanciadesarrollando aplicaciones web y móviles. he colaborado con
          personas talentosas para crear productos digitales para uso comercial
          y de consumo. Tengo una confianza tranquila, una curiosidad natural y
          un trabajo constante para mejorar mis habilidades, un problema de
          diseño a la vez.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default Home;

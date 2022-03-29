import type { NextPage } from "next";
import Head from "next/head";
import { siteTitle, Layout } from "components";
import { getSortedPostsData } from "../lib/posts";
import { PostCard, Categories, PostWidget } from "components/post";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface PostProps {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}
const Home: NextPage<PostProps> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Hola a todos, soy Marcelo Navarro, un desarrollador de software,
          titulado como Ingeniero en Informática.
          <br />
          <br />
          Me gusta aprender y compartir conocimientos, es por eso que existe
          este blog, para que puedas conocer más sobre mí, como mis intereses,
          ideas, soluciones, experiencia profesional y mi forma de trabajar.
          <br />
          <br />
          Te invito a que leas mis artículos y te pongas en contacto conmigo si
          tienes alguna duda o sugerencia.
          <br />
          <br />
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {allPostsData.map((post, id) => (
              <PostCard post={post} key={id} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

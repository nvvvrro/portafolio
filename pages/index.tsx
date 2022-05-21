import type { NextPage } from "next";
import { Layout } from "components";
import { getSortedPostsData } from "../lib/posts";
import { PostCard, Categories, PostWidget } from "components/post";
import { motion } from "framer-motion";
import React from "react";
import { IntroTransition } from "@/components/animations/intro/introTransition";

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
  isFirstMount: boolean;
}

const content = (isFirstMount: boolean) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const Home: NextPage<PostProps> = ({ allPostsData, isFirstMount }) => {
  return (
    <Layout home>
      <motion.section exit={{ opacity: 0 }}>
        {isFirstMount && <IntroTransition />}

        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="space-y-8"
        >
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
            Te invito a que leas mis artículos y te pongas en contacto conmigo
            si tienes alguna duda o sugerencia.
            <br />
            <br />
          </p>

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
        </motion.div>
      </motion.section>
    </Layout>
  );
};

export default Home;

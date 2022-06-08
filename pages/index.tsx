import React from "react";
import { Layout, Hero, IntroTransition } from "components";
import { PostCard, Categories, PostWidget } from "components/post";
import { getSortedPostsData } from "lib/posts";
import { motion } from "framer-motion";
import type { NextPage } from "next";

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
          <Hero />

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

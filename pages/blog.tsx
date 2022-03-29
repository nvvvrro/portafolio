import type { NextPage } from "next";
import { Layout } from "components";

interface Props {
  children: React.ReactNode;
  clasNames?: string;
}
const Blog: NextPage<Props> = ({ clasNames }) => {
  return (
    <Layout>
      <div>Blog</div>;
    </Layout>
  );
};

export default Blog;

import type { NextPage } from "next";
import { Layout } from "components";
import { Title } from "components";

interface Props {
  children: React.ReactNode;
  clasNames?: string;
}
const Blog: NextPage<Props> = ({ clasNames }) => {
  return (
    <Layout>
      <Title delay={0.3} duration={0.3} text="BLOG" />
    </Layout>
  );
};

export default Blog;

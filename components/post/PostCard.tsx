import { FC } from "react";

interface PostCardProps {
  post: {
    id: string;
    date: string;
    title: string;
  };
}
export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.id}
      {post.date}
    </div>
  );
};

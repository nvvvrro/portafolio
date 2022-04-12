import { FC } from "react";
import { Text } from "../animations";

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
      <Text text={post.title}></Text>
      {post.title}
      {post.id}
      {post.date}
    </div>
  );
};

import { Params } from "next/dist/next-server/server/router";
import PostCard from "../../components/PostCard";
import { getPosts } from "../../lib/api";
import * as api from "../../lib/api";
import { Post } from "../../types/post";

type Props = {
  post: Post;
};

function PostPage({ post }: Props) {
  const { userId, title, body } = post;

  return (
    <div className="post-page">
      <PostCard userId={userId} title={title} body={body} />
    </div>
  );
}
export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map((post: Post) => ({ params: { id: String(post.id) } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const id = params.id;
  const posts = await api.getPosts();
  const post = posts.find((post) => String(post.id) === id);

  return { props: { post } };
}

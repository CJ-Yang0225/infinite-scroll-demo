import { useRouter } from "next/router";

import { Post } from "../types/post";

type Props = {
  posts: Post[];
};

function PostList({ posts }: Props) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/post/${id}`);
  };

  return (
    <ul className="post-list__container">
      {posts.map((post) => (
        <li
          key={post.id}
          className="post-list__item"
          onClick={handleClick.bind(null, post.id)}
        >
          <div className="post-list__user-info">
            <div className="post-list__avatar">
              <svg
                version="1.1"
                width="32"
                height="32"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M313.6 304c-28.7 0-42.5 6-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="post-list__text">
            <h2 className="post-list__title" title={post.title}>
              {post.title}
            </h2>
            <p className="post-list__body">{post.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PostList;

import React from "react";
import { useRouter } from "next/router";

type Props = {
  userId: string;
  title: string;
  body: string;
};

function PostCard({ userId, title, body }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="card__paper">
      <div className="card__user-info">
        <div className="card__avatar">
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
        <span className="card__id">User Id: {userId}</span>
      </div>
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p className="card__body">{body}</p>
      </div>
      <span className="card__back" onClick={handleClick}>
        <svg
          version="1.1"
          width="32"
          height="40"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
          ></path>
        </svg>
      </span>
    </div>
  );
}

export default PostCard;

import { Post } from "../types/post";
import { API_GET_POSTS } from "./constants";

export const getPosts = (): Promise<Post[]> =>
  fetch(API_GET_POSTS).then((response) =>
    response.ok ? response.json() : console.error(response)
  );

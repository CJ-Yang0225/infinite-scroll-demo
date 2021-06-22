import { useEffect, useState, useCallback } from "react";
import { Post } from "../types/post";

import * as api from "../lib/api";

const initialPosts: Post[] = [];

const defaultItems = 20;

function useFetch() {
  const [posts, setPosts] = useState(initialPosts);
  const [partialPosts, setPartialPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadMore = ({ index = 0, items = 10 }) => {
    const begin = index * items + defaultItems;
    const end = begin + items;
    const newPosts = posts.slice(begin, end);

    setPartialPosts((partialPosts) => [...partialPosts, ...newPosts]);

    if (end === posts.length) setHasMore(false);
  };

  useEffect(() => {
    api.getPosts().then((data) => {
      setPosts(data);
      setPartialPosts(data.slice(0, defaultItems));
      setIsLoaded(true);
    });
  }, []);

  return {
    posts: partialPosts,
    isLoaded,
    hasMore,
    loadMore,
  };
}

export default useFetch;

import React, { useEffect, useState, useCallback } from "react";
import Head from "next/head";

import useFetch from "../hooks/useFetch";
import useIntersectRef from "../hooks/useIntersectRef";
import * as api from "../lib/api";
import { Post } from "../types/post";
import PostList from "../components/PostList";

export default function Home() {
  const [page, setPage] = useState(0);
  const { posts, isLoaded, hasMore, loadMore } = useFetch();

  const handleLoad = useCallback(() => {
    if (hasMore) setPage((page) => page + 1);
  }, [hasMore]);

  const ref = useIntersectRef(handleLoad);

  useEffect(() => {
    if (page !== 0) {
      setTimeout(() => loadMore({ page, items: 10 }), 500);
    }
  }, [isLoaded, loadMore, page]);

  return (
    <React.Fragment>
      <Head>
        <title>Infinite Scroll Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoaded ? <PostList posts={posts} /> : <h1>Loading...</h1>}
      {hasMore ? (
        <div
          ref={ref}
          className="post-loader"
          style={{ display: isLoaded ? "block" : "none" }}
        >
          Load More...
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>沒有更多則貼文</h1>
      )}
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const posts: Post[] = await api.getPosts();

  return { props: { data: posts } };
}

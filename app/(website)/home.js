"use client";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import { useState, useEffect } from "react";
import { fetcher } from "@/lib/sanity/client";
import useSWR from "swr";
import { paginatedquery } from "@/lib/sanity/groq";

export default function Post() {
  const [isLoading, setIsLoading] = useState(false);

  const POSTS_PER_PAGE = 12; // Adjust this based on your desired number of posts per page

  const paramsForQuery = {
    pageIndex: 0, // Change this if you want to start from a different index
    limit: POSTS_PER_PAGE
  };

  const {
    data: posts,
    error,
    isValidating
  } = useSWR([paginatedquery, paramsForQuery], fetcher, {
    fallbackData: [], // Use an empty array as fallback data
    onSuccess: () => {
      setIsLoading(false);
    }
  });

  return (
    <>
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, POSTS_PER_PAGE).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}

import PostPage from "./default";
import singlequery from "@/lib/sanity/groq";
import { client } from "@/lib/sanity/client";

import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

// export async function generateStaticParams() {
//   return await getAllPostsSlugs();
// }

// export async function generateMetadata({ params }) {
//   const post = await getPostBySlug(params.slug);
//   return { title: post.title };
// }

// export default async function PostDefault({ params }) {
//   const post = await getPostBySlug(params.slug);
//   return <PostPage post={post} />;
// }
export async function getStaticPaths() {
  const query = singlequery

  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
      params: {
          slug: post.slug.current
      }
  }));

  return {
      paths,
      fallback: 'blocking'
  }
}
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }) {
  const post = await client.fetch(query);
  return <PostPage post={post} />;
}

  const post = await client.fetch(query);

// export const revalidate = 60;

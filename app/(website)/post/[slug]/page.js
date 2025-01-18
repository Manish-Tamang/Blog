import PostPage from "./default";
import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;
  return {
    title: post.title,
    description: post.excerpt || " ",
    openGraph: {
      title: post.title,
      description: post.excerpt || " ",
      images: [
        {
          url: imageProps?.src || "/img/opengraph.jpg",
          width: imageProps?.width || 800,
          height: imageProps?.height || 600
        }
      ]
    },
    twitter: {
      title: post?.title || "Manish Tamang",
      card: "summary_large_image"
    }
  };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

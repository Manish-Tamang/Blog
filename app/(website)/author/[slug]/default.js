import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import PostList from "@/components/postlist";

export default function AuthorPageDefault({
  loading,
  author,
  posts
}) {
  if (!loading && !author?.slug) {
    notFound();
  }

  const imageProps = author?.image
    ? urlForImage(author?.image)
    : null;

  return (
    <>
      <Container>
        <div className="mx-auto max-w-screen-md">
          <div className="flex items-center justify-center space-x-4">
            {imageProps && (
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={imageProps.src}
                  alt={author.name}
                  className="object-cover"
                  fill
                  sizes="80px"
                />
              </div>
            )}
            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
              {author.name}
            </h1>
          </div>

          <div className="prose mx-auto my-3 dark:prose-invert">
            {author.bio && <PortableText value={author.bio} />}
          </div>

          <div className="my-10 text-center text-gray-500">
            {posts.length > 0 ? (
              <span>Posts by {author.name}</span>
            ) : (
              <span>No posts by {author.name} </span>
            )}
          </div>

          <div className="my-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts.map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

import AuthorPage from "./default";
import { getAllAuthorsSlugs, getAuthorPostsBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllAuthorsSlugs();
}

export async function generateMetadata({ params }) {
    const {author} = params
    const authorData = await getAuthorPostsBySlug(author);
  return { title: authorData?.name || "Author" };
}

export default async function AuthorDefault({ params }) {
    const {author} = params
  const authorData = await getAuthorPostsBySlug(author);
  return <AuthorPage author={authorData} posts={authorData} />;
}
import AuthorPage from "./default";
import { getAllAuthorsSlugs, getAuthorPostsBySlug, getPostBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
return await getAllAuthorsSlugs();
}

export async function generateMetadata({ params }) {
const author = await getAuthorPostsBySlug(params.author);
return { title: author?.name || "Author" };
}

export default async function AuthorDefault({ params }) {
const author = await getAuthorPostsBySlug(params.author);
const posts = await getAuthorPostsBySlug(params.author)
return <AuthorPage author={author} posts={posts} />;
}
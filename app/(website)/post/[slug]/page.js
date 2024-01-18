import PostPage from "./default";
import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

export async function getStaticPaths() {
  const paths = await getAllPostsSlugs();
    return {
        paths,
            fallback: false,
              };
              }

              export async function getStaticProps({ params }) {
                try {
                    const post = await getPostBySlug(params.slug);

                        if (!post) {
                              return {
                                      notFound: true,
                                            };
                                                }

                                                    return {
                                                          props: {
                                                                  post,
                                                                        },
                                                                            };
                                                                              } catch (error) {
                                                                                  console.error("Error fetching post:", error);
                                                                                      return {
                                                                                            notFound: true,
                                                                                                };
                                                                                                  }
                                                                                                  }

                                                                                                  export default function PostDefault({ post }) {
                                                                                                    return <PostPage post={post} />;
                                                                                                    }
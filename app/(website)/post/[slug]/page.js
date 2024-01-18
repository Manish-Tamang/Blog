import PostPage from "./default";
import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

const PostDefault = ({ post }) => <PostPage post={post} />;

PostDefault.getInitialProps = async ({ query }) => {
  try {
    const post = await getPostBySlug(query.slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      post,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      notFound: true,
    };
  }
};

export default PostDefault;
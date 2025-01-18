import { ImageResponse } from "@vercel/og";
import { getPostBySlug } from "@/lib/sanity/client";
import OgImage from "@/components/ogimage";
import { urlForImage } from "@/lib/sanity/image";

const InterBold = fetch(
  new URL("../../../../public/fonts/Inter-Bold.otf", import.meta.url)
).then(res => res.arrayBuffer());

export default async function handler({ params }) {
  const post = await getPostBySlug(params.slug);
     const imageProps = post?.mainImage
        ? urlForImage(post?.mainImage)
          : null;

  const fontData = await InterBold;
   return new ImageResponse(
    <OgImage post={post} imageProps={imageProps} />,
     {
       width: 1200,
       height: 630,
       fonts: [
         {
            name: "Inter",
            data: fontData,
            style: "normal",
          }
         ]
       }
     );
}
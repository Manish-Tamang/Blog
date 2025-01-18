import Image from "next/image";

export default function OgImage({ post, imageProps }) {
    return (
    <div
        tw="w-full h-full flex flex-col items-start justify-between bg-white px-10 py-10"
        style={{ fontFamily: "Inter" }}>
        <div tw="flex flex-col">
            <span tw=" text-xs font-medium tracking-wider uppercase text-blue-600">
            {post?.categories && post.categories[0]?.title}
        </span>
       
            <h1 tw="mt-2 mb-3 text-3xl font-semibold tracking-tight lg:leading-snug lg:text-4xl dark:text-black">
                {post.title}
            </h1>
            <p tw="mt-2 text-sm text-gray-500 line-clamp-2  dark:text-gray-600">
            {post.excerpt || " "}
            </p>
        </div>


    {imageProps && (
        <div tw="relative w-full aspect-video rounded-md overflow-hidden">
        <Image
            src={imageProps.src}
             alt={post.mainImage?.alt || "Post Cover"}
            fill
            className="object-cover"
             sizes="100vw"
            priority
          />
        </div>
       )}
      </div>
    );
}
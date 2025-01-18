import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || "Manish Tamang",
      template: "%s | Manish"
    },
    description:
      settings?.description ||
      "Manish Tamang, a passionate web developer from Itahari, Nepal, skilled in React, Next.js, Tailwind CSS, Prisma, PostgreSQL, and Node.js. I specialize in creating captivating websites and am on a journey to become a full-stack developer, crafting powerful web applications that make a meaningful impact.",
    keywords: ["Next.js", "Sanity", "Tailwind CSS", "Manish Tamang", "Prashanti Academy"],
    authors: [{ name: "Manish" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Manish Tamang",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;

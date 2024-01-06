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
      "Manish Tamang, a 16-year-old from Kathmandu, Nepal, with a fervent passion for web development. My journey in the world of coding began at a young age, and I've immersed myself in creating captivating websites using React, Next.js, and Tailwind CSS. My ambition is to evolve into a full-stack developer, adept at both front-end and back-end development, enabling me to craft powerful and versatile web applications. With every project, I'm honing my skills and knowledge, eager to embrace the dynamic landscape of technology and make a meaningful impact.",
    keywords: ["Next.js", "Sanity", "Tailwind CSS", "Manish Tamang", "Prashanti Academy"],
    authors: [{ name: "Surjith" }],
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

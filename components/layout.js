import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import NavbarAlt from "@/components/navbaralt";
import { cx } from "@/utils/all";
import { fetcher } from "@/lib/sanity/client";
import useSWR from "swr";
import { paginatedquery } from "@/lib/sanity/groq";
// import defaultOG from "../public/img/og-default.jpg";

import Footer from "@/components/footer";
// import PopupWidget from "../components/popupWidget";

export default function Layout(props) {
  const {
    data: data
  } = useSWR([paginatedquery], fetcher,);
  const { children } = props;
  const ogimage = urlForImage(props?.openGraphImage) ?? "";
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={data.url}
        openGraph={{
          url: data.url,
          title: data.title,
          description: data.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: data.title
            }
          ],
          site_name: data.title
        }}
      />

      <div
        className={cx(
          props?.fontStyle,
          "antialiased text-gray-800 dark:bg-black dark:text-gray-400"
        )}>
        {props.alternate ? (
          <NavbarAlt {...props} />
        ) : (
          <Navbar {...props} />
        )}

        <div>{children}</div>

        <Footer {...props} />
      </div>
    </>
  );
}

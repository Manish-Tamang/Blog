/* eslint-disable */

"use client";
import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaNpm,
  FaPython,
  FaDocker
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSanity,
  SiTypescript
} from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { useState, useEffect } from "react";

export default function About({ authors, settings }) {
  const [stars, setStars] = useState(0);
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Manish-Tamang/Blog"
        );
        const data = await response.json();
        setStars(data.stargazers_count || 0);
      } catch (error) {
        console.error("Failed to fetch repo stars", error);
      }
    };
    fetchStars();
  }, []);
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
        About This Blog
      </h1>
      <div className="mb-8 text-center">
        <p className="text-lg">
          This blog is a personal project created by{" "}
          <span className="text-brand-primary font-medium dark:text-blue-400">
            Manish Tamang
          </span>
          . It was conceived during my early days of learning Next.js,
          at a time when the shift from the pages router to the app
          router had just taken place. I initially started with Stablo
          templates, and then embarked on the journey to customise and
          make it my own.
        </p>
        <p className="mt-2 text-lg">
          This project served as a perfect practical learning
          experience. Through reverse engineering and meticulous code
          dissection, I aimed to solidify my understanding of
          Next.js's app router concepts. It is worth noting that all
          of the authors you see featured in this blog are actually my
          friends.
        </p>
        <p className="mt-2 text-lg">
          Here's a glimpse into the technologies used to build this
          blog:
        </p>
      </div>

      <h2 className="text-brand-primary mb-3 mt-8 text-center text-2xl font-semibold tracking-tight lg:text-3xl lg:leading-snug dark:text-white">
        Tech Stack
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        <TechCard
          name="Next.js"
          version="13.4.12"
          color="#000000"
          Icon={SiNextdotjs}
        />
        <TechCard
          name="React"
          version="18.2.0"
          color="#61dafb"
          Icon={FaReact}
        />
        <TechCard
          name="Tailwind CSS"
          version="3.3.1"
          color="#06B6D4"
          Icon={SiTailwindcss}
        />
        <TechCard
          name="Sanity"
          version="3.9.0"
          color="#f03e2f"
          Icon={SiSanity}
        />
        <TechCard
          name="Node.js"
          version="v18.16.0"
          color="#68a063"
          Icon={FaNodeJs}
        />
        <TechCard
          name="Typescript"
          version="5.0.4"
          color="#3178c6"
          Icon={SiTypescript}
        />
        <TechCard name="Github" Icon={FaGithub} color="#171515" />
        <TechCard
          name="Vercel"
          Icon={TbBrandVercel}
          color="#000000"
        />
        <TechCard name="npm" Icon={FaNpm} color="#CB3837" />
      </div>

      <h2 className="text-brand-primary mb-3 mt-8 text-center text-2xl font-semibold tracking-tight lg:text-3xl lg:leading-snug dark:text-white">
        Project Structure
      </h2>
      <p className="mb-8 mt-2 text-center text-lg">
        Here is the project folder structure:
      </p>

      <pre className="overflow-x-auto rounded-lg bg-gray-100 px-5 py-5 text-sm dark:bg-gray-800">
        {`├── .eslintignore        # Files to be ignored by ESLint.
├── .eslintrc          # Configuration for ESLint.
├── .gitignore         # Files to be ignored by Git.
├── .prettierrc        # Configuration for Prettier code formatting.
├── .vscode           # Configuration directory for VSCode.
│   └── settings.json    # VSCode settings.
├── README.md          # Project README.
├── app                 # Next.js application directory (App Router).
│   ├── (sanity)       # Routes related to Sanity Studio.
│   │   ├── layout.tsx    # Layout for Sanity Studio.
│   │   └── studio      # Sanity Studio routes.
│   │       └── [[...index]]
│   │           ├── head.tsx     # Head component for Sanity Studio.
│   │           └── page.tsx     # Sanity Studio page.
│   ├── (website)      # Routes related to the main website.
│   │   ├── about      # About page related files.
│   │   │   ├── about.js  # About page component.
│   │   │   └── page.js   # About page data fetching logic.
│   │   ├── archive    # Archive page related files.
│   │   │   ├── archive.js # Archive page component.
│   │   │   └── page.js  # Archive page data fetching logic.
│   │   ├── author     # Author related files.
│   │   │   └── [slug]  # Dynamic author route.
│   │   │       ├── default.js # Author page default component.
│   │   │       └── page.js  # Author page data fetching logic.
│   │   ├── contact    # Contact page related files.
│   │   │   ├── contact.js # Contact page component.
│   │   │   └── page.js  # Contact page data fetching logic.
│   │   ├── home.js     # Home page component.
│   │   ├── layout.tsx  # Root layout for website pages.
│   │   ├── page.js     # Home page data fetching logic.
│   │   └── post       # Post related files.
│   │       └── [slug]  # Dynamic post route.
│   │           ├── default.js # Post page default component.
│   │           ├── opengraph-todo.js  # Open Graph image generator.
│   │           └── page.js  # Post page data fetching logic.
│   ├── api          # API routes.
│   │   └── hello      # Example API route.
│   │       └── route.ts  # API route handler.
│   ├── favicon.ico     # Favicon file
│   ├── layout.tsx    # Root layout of the app.
│   └── providers.jsx  # Theme provider
├── components        # Reusable React components.
│   ├── blog           # Blog related components.
│   │   ├── authorCard.js  # Author card component.
│   │   └── category.js    # Category label component.
│   ├── container.js   # Container component for page layouts.
│   ├── featured.js    # Featured post component.
│   ├── footer.js      # Footer component.
│   ├── layout.js      # Layout component (legacy).
│   ├── navbar.js     # Main navbar component
│   ├── navbaralt.js  # Alternate navbar component (legacy)
│   ├── ogimage.js     # Open Graph image component.
│   ├── postalt.js     # Alternate post component.
│   ├── postlist.js    # Post list item component.
│   ├── sidebar.js     # Sidebar component.
│   ├── themeSwitch.js  # Theme switch component.
│   └── ui          # UI related components.
│       ├── label.js      # Label component.
│       ├── search.js    # Search input component.
│       └── time.js       # Time display component.
├── lib             # Library files.
│   └── sanity       # Sanity.io related files.
│       ├── client.ts   # Sanity client setup and data fetching.
│       ├── config.ts   # Sanity configuration.
│       ├── groq.js     # GROQ queries.
│       ├── image.js     # Image helper functions.
│       ├── plugins    # Sanity Studio plugins.
│       │   ├── portabletext.js   # Portable Text serialization setup.
│       │   └── previews     # Sanity Studio previews.
│       │       ├── BlogPreview.js
│       │       ├── BlogPreview.jsx
│       │       ├── IframePreview.css
│       │       ├── PagePreview.js
│       │       └── PagePreview.jsx
│       └── settings.tsx  # Sanity Singleton setup plugin
│       └── schemas       # Sanity schema definitions.
│           ├── author.js   # Author schema.
│           ├── blockContent.js # Block content schema.
│           ├── category.js # Category schema.
│           ├── index.ts    # Entry point for schemas.
│           ├── post.js     # Post schema.
│           ├── previews #  Preview components.
│           │    ├── iframe.jsx # iFrame Preview component
│           │    └── table.jsx # table preview component
│           └── settings.js # Settings singleton schema
├── next-sitemap.config.js  # Sitemap configuration for next-sitemap.
├── next.config.js      # Next.js configuration file.
├── package-lock.json    # Lock file for npm dependencies.
├── package.json        # Project metadata and dependencies.
├── postcss.config.js   # PostCSS configuration.
├── public            # Public assets (images, fonts, etc.).
│   ├── fonts       # Font files.
│   │   ├── Inter-Bold.otf
│   │   └── Inter-Regular.otf
│   └── img         # Image files.
│       ├── opengraph.jpg  # Open Graph default image
│       └── skeleton.svg    # Skeleton loading animation.
├── sanity.cli.ts     # Sanity CLI configuration.
├── sanity.config.ts  # Sanity studio configuration.
├── styles          # Stylesheets.
│   ├── prism.css    # Prism CSS for code highlighting.
│   └── tailwind.css   # Tailwind CSS styles.
├── tailwind.config.js # Tailwind configuration.
├── tsconfig.json      # TypeScript configuration.
└── utils           # Utility functions
    ├── all.js  # utility functions
    └── upperFirst.js   # utility functions
`}
      </pre>
      <div className="mt-10 flex justify-center">
        <Link
          href="https://github.com/Manish-Tamang/Blog"
          target="_blank"
          rel="noopener"
          className="ring-offset-background focus-visible:ring-ring before:animate-rainbow group relative inline-flex inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors transition-transform duration-200 before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]">
          <div className="flex items-center">
            <span class="ml-1 p-1 text-black lg:inline dark:text-white">
              Star on GitHub
            </span>
          </div>
          <div class="ml-2 flex items-center gap-1 text-sm md:flex">
            <svg
              class="size-4 text-gray-500 transition-all duration-200 group-hover:text-yellow-300"
              data-slot="icon"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                fill-rule="evenodd"></path>
            </svg>
            <span class="font-display inline-block font-medium tabular-nums tracking-wider text-black dark:text-white">
              {stars}
            </span>
          </div>
        </Link>
      </div>
    </Container>
  );
}

const TechCard = ({ name, version, color, Icon }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon size="3em" color={color} className="mb-2" />
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name}
      </span>

      {version && (
        <span className="text-sm text-gray-500 dark:text-gray-500">
          v{version}
        </span>
      )}
    </div>
  );
};

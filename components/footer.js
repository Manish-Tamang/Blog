import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
          <a
            href=""
            rel="noopener"
            target="_blank">
            Manish Tamang
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://github.com/Manishtmang"
            rel="noopener"
            target="_blank">
            Github
          </a>
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="mt-5">
          {/* <a
            href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            className="relative block w-44">
            <Image
              src={VercelLogo}
              alt="Powered by Vercel"
              unoptimized={true}
              width="150"
              height="25"
            />
          </a> */}
        </div>
        <ThemeSwitch />
      </div>
    </Container>
  );
}



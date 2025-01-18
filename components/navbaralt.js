import Container from "@components/container.astro";
import logoImage from "@assets/logo.svg";
import darkLogo from "@assets/logo-dark.svg";

const leftmenu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const rightmenu = [
  {
    label: "Archive",
    href: "/archive",
  },
  {
    label: "Github",
    href: "https://github.com/Manish-Tamang",
    external: true,
    badge: "new",
  },
  {
    label: "Download",
    href: "https://github.com/Manish-Tamang",
    external: true,
  },
];

const mobilemenu = [...leftmenu, ...rightmenu];

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => {
  document.querySelectorAll(".navmenu-toggle").forEach((Element) => {
    Element.classList.toggle("hidden");
  });
});

export default function Navigation() {
  return (
    <Container>
      <nav>
        <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
          <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
            {leftmenu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto">
            <a className="w-28 dark:hidden" href="/">
              <img src={logoImage} alt="Logo" />
            </a>

            <a className="hidden w-28 dark:block" href="/">
              <img src={darkLogo} alt="Logo" />
            </a>

            <button
              id="menu"
              aria-label="Toggle Menu"
              className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="navmenu-toggle"
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>

                <path
                  className="navmenu-toggle hidden"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
            {rightmenu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="navmenu-toggle hidden">
          <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
            {mobilemenu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                target={item.external ? "_blank" : ""}
                rel={item.external ? "noopener" : ""}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </Container>
  );
}

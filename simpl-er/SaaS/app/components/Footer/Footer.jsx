import Link from "next/link";

const FooterItems = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/onekadian/",
  },
  {
    name: "Mail",
    href: "mailto:manageanirudh@gmail.com?body=lets%20talk%20software",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/onekadian",
  },
  {
    name: "Work with me",
    href: "https://cal.com/onekadian/30min",
  },
];

const textContent = {
  title: "Indie Hacker Kit",
  description:
    "Everything you need to execute that idea today and launch your product",
};

// Update the array above, limit to 4 for better ux and you have a footer ready

const Footer = () => {
  return (
    <footer class="p-4 bg-gray-900 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <h2 className="flex justify-center items-center text-2xl font-semibold text-white">
          {textContent.title}
        </h2>
        <p className="my-6 text-gray-500">{textContent.description}</p>
        {/* Footer Items */}
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-300">
          {FooterItems.map((foot) => (
            <li>
              <Link href={foot.href} class="mr-4 hover:underline md:mr-6 ">
                {foot.name}
              </Link>
            </li>
          ))}
        </ul>
        <span class="text-sm text-gray-500 sm:text-center">
          Made with <a href="#" class="hover:underline"></a>
          ❤️ by Anirudh Kadian
        </span>
      </div>
    </footer>
  );
};

export default Footer;

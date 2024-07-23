import Image from "next/image";
import elon from "../../Images/elon.jpg";
import Link from "next/link";

const textContent = {
  authorName: "Anirudh Kadian",
  authorRole: "Creator of Indie Hacker Kit",
  articleTitle: "Founders who build from scratch end up launching too late",
  introParagraph:
    "And I'm one of them too. I was always having ideas, but when it came to building them, I would flop.",
  problemsIntro: "Most indie hackers suffer from these 2 problems:",
  problem1: "1. Trying to build everything from scratch",
  problem2: "2. Searching for resources without any direction",
  solutionIntro:
    "That's why I built the Indie Hacker Kit - to help people like you to build your ideas fast",
  kitDetails:
    "It contains a code boilerplate, resource sheet with tools and valuable reading stuff, notion template, ai prompts with clear instructions for How-to do what.",
  conclusion:
    "If you wish to turn your idea into a product, you're at the right place, get started!",
};

const FoundersNote = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-300">
                <Image
                  className="mr-4 w-16 h-16 rounded-full"
                  src={elon}
                  alt="Anirudh Kadian"
                  height={64}
                  width={64}
                />
                <div>
                  <Link
                    href="#"
                    rel="author"
                    className="text-xl font-blid text-white"
                  >
                    {textContent.authorName}
                  </Link>
                  <p className="text-base text-gray-500 ">
                    {textContent.authorRole}
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-2xl font-semibold leading-tight text-gray-300 lg:mb-6 lg:text-3xl ">
              {textContent.articleTitle}
            </h1>
          </header>
          <p className="lead text-gray-400">
            {textContent.introParagraph}
            <p className="lead text-gray-400 mt-2">
              {textContent.problemsIntro}
              <ol className="lead text-gray-400 mt-2">
                <li>{textContent.problem1}</li>
                <li>{textContent.problem2}</li>
              </ol>
              <p className="lead text-gray-400 mt-2">
                {textContent.solutionIntro}
              </p>
            </p>
          </p>
          <p className="text-gray-400 pt-2">
            {textContent.kitDetails}
            <p className="text-gray-400 pt-2">{textContent.conclusion}</p>
          </p>
        </article>
      </div>
    </div>
  );
};

export default FoundersNote;

import Image from "next/image";
import AnirudhKadian from "../Images/AnirudhKadianProfile.jpeg";
import Link from "next/link";
import GatedContent from "../components/Extras/GatedContent";

const FoundersNote = () => {
  return (
    // <div className="bg-gray-900 py-48 sm:py-32">
    //   <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
    //     <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
    //       <header className="mb-4 lg:mb-6 not-format">
    //         <address className="flex items-center mb-6 not-italic">
    //           <div className="inline-flex items-center mr-3 text-sm text-gray-300">
    //             <Image
    //               className="mr-4 w-16 h-16 rounded-full"
    //               src={AnirudhKadian}
    //               alt="Jese Leos"
    //               height={64}
    //               width={64}
    //             />
    //             <div>
    //               <Link
    //                 href="#"
    //                 rel="author"
    //                 className="text-xl font-blid text-white"
    //               >
    //                 Anirudh Kadian
    //               </Link>
    //               <p className="text-base text-gray-500 ">
    //                 Creator of Indie Hacker Kit
    //               </p>
    //               {/* <p className="text-base text-gray-500 ">
    //                 <time
    //                   pubdate
    //                   datetime="2022-02-08"
    //                   title="February 8th, 2022"
    //                 >
    //                   Feb. 8, 2022
    //                 </time>
    //               </p> */}
    //             </div>
    //           </div>
    //         </address>
    //         <h1 className="mb-4 text-2xl font-semibold leading-tight text-gray-300 lg:mb-6 lg:text-3xl ">
    //           Founders who build from scratch end up launching too late
    //         </h1>
    //       </header>
    //       <p className="lead text-gray-400">
    //         And I'm one of them too. I was always having ideas, but when it came
    //         to building them, I would flop.
    //         <p className="lead text-gray-400 mt-2">
    //           Most indie hackers suffer from these 2 problems:
    //           <ol className="lead text-gray-400 mt-2">
    //             <li>1. Trying to build everything from scratch</li>
    //             <li>2. Searching for resources without any direction</li>
    //           </ol>
    //           <p className="lead text-gray-400 mt-2">
    //             That's why I built the Indie Hacker Kit - to help people like
    //             you to build your ideas fast
    //           </p>
    //         </p>
    //       </p>
    //       <p className="text-gray-400 pt-2">
    //         It contains a code boilerplate, resource sheet with tools and
    //         valuable reading stuff, notion template, ai prompts with clear
    //         instructions for How-to do what.
    //         <p className="text-gray-400 pt-2">
    //           If you wish to turn your idea into a product, you're at the right
    //           place, get started!
    //         </p>
    //       </p>
    //     </article>
    //   </div>
    // </div>
    <GatedContent />
  );
};

export default FoundersNote;

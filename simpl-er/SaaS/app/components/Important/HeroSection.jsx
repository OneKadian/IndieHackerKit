"use client";
import Image from "next/image";
import SingleTestimonial from "../Extras/SingleTestimonial";
import notion from "../../Images/MainGaphix.png";
import Link from "next/link";

const HeroSection = () => {
  const openingCopy = {
    announcementText: "Launch Your SaaS Today",
    titleText: "You are 100% launching a product, today!",
    // titleText: "You are 100% becoming a founder, today!",
    subtitleText:
      "Don't let procrastination stop you, Launch your product fast, without starting from scratch.",
    ButtonText1: "Create Your SaaS Now",
    ButtonText2: "Build Your Portfolio",
  };

  return (
    <section id="heroOne" className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="py-12 md:py-20">
          <SingleTestimonial />
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              {openingCopy.titleText}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-xl font-medium text-gray-400">
                {openingCopy.subtitleText}
              </p>
              <div className="mt-10 mb-8  flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:justify-center sm:gap-x-6">
                <Link
                  href="#"
                  // className="w-[360px] sm:w-auto mx-2 rounded-md bg-blue-600
                  // px-3.5 py-2.5 text-base font-semibold text-white shadow-sm
                  // hover:bg-blue-800 focus-visible:outline
                  // focus-visible:outline-2 focus-visible:outline-offset-2
                  // focus-visible:outline-indigo-600"
                  className="rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1"
                >
                  {openingCopy.ButtonText1}
                </Link>
                {/* <Link
                  href="#"
                  className="w-[360px] sm:w-auto mx-2 rounded-md border border-gray-300 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {openingCopy.ButtonText2}➝
                </Link> */}
              </div>
            </div>
          </div>
          {Image && (
            <div className="relative m-auto max-w-5xl">
              <Image
                className="mx-auto h-auto w-full rounded-md bg-gray-400"
                src={notion}
                alt="notion"
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                placeholder="blur"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

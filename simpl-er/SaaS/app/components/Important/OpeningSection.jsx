import Link from "next/link";
import SingleTestimonial from "../Extras/SingleTestimonial";

export default function OpeningSection() {
  const openingCopy = {
    announcementText: "Literally everything you need to get started",
    titleText: "Launch your SaaS in the next 30 Minutes",
    subtitleText:
      "Code Boilerplate, resource sheet and templates to turn developers into founders and help them launch instantly",
  };

  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:pb-24 pt-36 lg:pt-40">
          <SingleTestimonial />
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
              {openingCopy.titleText} <span> </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {openingCopy.subtitleText}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Launch your idea ➝
              </Link>
            </div>
            <SingleTestimonial />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}

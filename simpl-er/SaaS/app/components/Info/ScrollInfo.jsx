import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedIcon from "@mui/icons-material/Speed";
import notion from "../../Images/notionTemplate.png";
import Image from "next/image";

const ScrollCopy = {
  featuredHeading: "Show Products not Ideas",
  featuredDescription:
    "You've read enough books, seen enough videos and followed enough founders, Its Time to build! ",
};

const Scrolls = [
  {
    name: "Turn Ideas into Reality",
    description:
      "Leave procrastination behind, Execute your ideas and see them come to life.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Instant Launch",
    description:
      "Save time and effort with our ready-to-use components and launch instructions.",
    icon: SpeedIcon,
  },
  {
    name: "Validation and Scaling",
    description:
      "Avoid overthinking and Launch fast, Validate your ideas and scale your SaaS venture.",
    icon: TrendingUpIcon,
  },
];

const scrollExtra = {
  text1:
    "Deploy your product and send it to your target market to validate your idea, and iterate or scale based on the response.",
  question: "Are you ready?",
  text2:
    "You've read enough books, seen enough videos and followed enough founders, Its Time to build! ",
};

const ScrollInfo = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                {ScrollCopy.featuredHeading}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                {ScrollCopy.featuredDescription}
              </p>
            </div>
          </div>
        </div>
        {/* Scroll image, hidden on mobile screen */}
        <div className="hidden lg:block -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {/* <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          /> */}
          <Image
            src={notion}
            alt="Product screenshot"
            className="w-[48rem] sm:w-[57rem] md:-ml-4"
            width={2432}
            height={1442}
          />
        </div>
        {/* Image component, hidden on large screen, visible in mobile */}
        <div className="lg:hidden flex justify-center items-center">
          <Image
            src={notion}
            alt="Product screenshot"
            className="w-[48rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
              {/* <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p> */}
              <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {Scrolls.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-300"
                        aria-hidden="true"
                      />
                      {feature.name}:
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8">{scrollExtra.text1}</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-300">
                {scrollExtra.question}
              </h2>
              <p className="mt-6">{scrollExtra.text2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollInfo;

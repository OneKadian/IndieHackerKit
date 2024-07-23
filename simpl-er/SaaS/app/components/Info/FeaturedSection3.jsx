import Image from "next/image";

const featuredCopy = {
  featuredHeading: "Closest you come to creating a second brain",
  featuredDescription:
    "Manage your workflow and access the knowledge center to put the product cycle in the right direction, unlike your life.",
};

// If you wish to list your features
// const features = [
//   {
//     name: "Five Phases",
//     description:
//       "Your whole product cycle divided into 5 phases to ensure a smooth flow.",
//     icon: PentagonIcon,
//   },
//   {
//     name: "Hacks and findings",
//     description:
//       "Specific knowledge pertaining to each phase inserted for success.",
//     icon: SavedSearchIcon,
//   },
//   {
//     name: "Templates",
//     description:
//       "Readymade prompts and templates to enable rapid product development.",
//     icon: ExtensionIcon,
//   },
// ];

export default function FeaturedSection2() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 lg:flex lg:items-center">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-semibold sm:leading-[55px] sm:tracking-tight text-white">
                {featuredCopy.featuredHeading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {featuredCopy.featuredDescription}
              </p>
              {/* Features List */}
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
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
              </dl> */}
            </div>
          </div>
          <div className="flex overflow-hidden flex-1 bg-[#202020] justify-center rounded-xl shadow-xl ring-1 ring-gray-400/10 items-center h-[24rem] lg:h-auto">
            <video
              src="https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/notionVideo.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

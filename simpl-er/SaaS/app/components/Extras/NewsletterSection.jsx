import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

// Submit button does nothing, add function yourself
const newsletterContent = {
  heading: "Subscribe to the newsletter",
  subheading:
    "Get a collection of resources, research or product updates delivered to your inbox once a week",
  emailPlaceholder: "Enter your email",
  buttonText: "Subscribe",
  feature1: {
    title: "Weekly articles",
    description:
      "One day of delivery, seven days of action. Keep that fire burning",
  },
  feature2: {
    title: "No Spam",
    description: "Delivering spam free, value packed insights to your inbox",
  },
};

export default function NewsletterSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl lg:text-4xl mb-2 font-semibold text-white sm:leading-[55px] sm:tracking-tight">
              {newsletterContent.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {newsletterContent.subheading}
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder={newsletterContent.emailPlaceholder}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {newsletterContent.buttonText}
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="flex">
                <div className="rounded-md mr-4 bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="flex justify-center items-center font-semibold text-sm text-white">
                  {newsletterContent.feature1.title}
                </dt>
              </div>
              <dd className="mt-2 leading-7 text-gray-300">
                {newsletterContent.feature1.description}
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex">
                <div className="rounded-md mr-4 bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="flex justify-center items-center font-semibold text-white">
                  {newsletterContent.feature2.title}
                </dt>
              </div>
              <dd className="mt-2 leading-7 text-gray-300">
                {newsletterContent.feature2.description}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      ></div>
    </div>
  );
}

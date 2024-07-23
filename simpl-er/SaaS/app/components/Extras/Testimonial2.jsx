import React from "react";

const textContent = {
  heading: "What clients say about their experience with us",
  title: "Client Testimonials",
  button: "More reviews on TrustPilot",
  testimonial1: {
    heading: "Absolutely recommended!",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.",
    name: "James Khawalski",
    designation: "CEO, Mavoline",
  },
  testimonial2: {
    heading: "Service was amazing!",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.",
    name: "Jacob Jones",
    designation: "YouTube Personality",
  },
  testimonial3: {
    heading: "Saved me 1000s of hours",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.",
    name: "Jenny Wilson",
    designation: "Esports Commentator",
  },
};

const Testimonial2 = () => {
  return (
    <section className="py-12 text-blue-900 sm:py-16 lg:py-20 bg-gray-900">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-blue-600">
              {textContent.heading}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              {textContent.title}
            </h2>
          </div>

          <div className="order-3 mt-8 text-center md:mt-16">
            <button className="mb-20 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
              {textContent.button}
            </button>
          </div>

          <div className="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
            {Object.keys(textContent)
              .filter((key) => key.startsWith("testimonial"))
              .map((key, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl border border-blue-600 text-center shadow-md shadow-blue-200"
                >
                  <div className="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                    <span className="absolute -left-5 -top-6 rounded-full border border-blue-600 bg-white p-3 text-5xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <p className="border-blue-500 px-10 text-xl font-black text-gray-300">
                        {textContent[key].heading}
                      </p>
                      <blockquote className="mt-8 flex-1">
                        <p className="leading-relaxed text-gray-300">
                          {textContent[key].body}
                        </p>
                      </blockquote>
                    </div>
                    <div className="-mx-5 mt-8 px-8 py-1">
                      <div className="flex justify-center items-center">
                        <img
                          className="h-11 mx-4 w-11 flex-shrink-0 rounded-full object-cover"
                          src="https://randomuser.me/api/portraits/men/1.jpg"
                        />
                        <div className="flex flex-col">
                          <p className="text-base font-bold text-gray-300">
                            {textContent[key].name}
                          </p>
                          <p className="text-blue-90 mt-0.5 text-sm text-gray-300">
                            {textContent[key].designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;

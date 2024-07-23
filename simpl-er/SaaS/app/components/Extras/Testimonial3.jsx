import React from "react";

const Testimonial3 = () => {
  const testimonialData = {
    clientExperienceText: "What clients say about their experience with us",
    testimonialsHeading: "Client Testimonials",
    buttonText: "More reviews on TrustPilot",
    testimonials: [
      {
        title: "Absolutely recommended!",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.",
        name: "James Khawalski",
        designation: "CEO, Mavoline",
        imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        title: "Service was amazing!",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.",
        name: "Jacob Jones",
        designation: "Youtube Personality",
        imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        title: "Saved me 1000s of hours",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.",
        name: "Jenny Wilson",
        designation: "Esports Commentator",
        imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    ],
  };

  return (
    <section className="bg-gray-900 py-12 text-blue-900 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="relative mx-auto mb-10 flex h-96 overflow-hidden rounded-xl bg-blue-600 shadow sm:mt-20 lg:h-auto lg:max-w-md lg:pt-20">
            {/* <img
              className="absolute top-0 h-full w-full object-cover opacity-10"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt=""
            /> */}
            <div className="relative mt-auto w-full">
              <div className="flex flex-col p-6 lg:px-7 lg:py-8">
                <div className="">
                  <blockquote className="">
                    <p className="text-3xl font-bold text-white sm:text-5xl text-center">
                      "{testimonialData.testimonials[1].quote}"
                    </p>
                  </blockquote>
                </div>
                <div className="mt-10 flex items-center justify-center">
                  <img
                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    src={testimonialData.testimonials[1].imgSrc}
                    alt=""
                  />
                  <div className="ml-4 text-white text-center">
                    <p className="text-base font-bold">
                      {testimonialData.testimonials[1].name}
                    </p>
                    <p className="text-blue-90 mt-0.5 text-sm">
                      {testimonialData.testimonials[1].designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20">
            {testimonialData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-900 text-gray-300 rounded-xl p-6"
              >
                <blockquote className="text-lg leading-relaxed text-center">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4 flex items-center justify-center">
                  <img
                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    src={testimonial.imgSrc}
                    alt=""
                  />
                  <div className="ml-4 text-center">
                    <p className="text-base font-bold text-gray-300">
                      {testimonial.name}
                    </p>
                    <p className="text-blue-90 mt-0.5 text-sm">
                      {testimonial.designation}
                    </p>
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

export default Testimonial3;

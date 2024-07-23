import React from "react";

const textContent = {
  heading: "Contact Us",
  subheading: "Got an issue? Want to send feedback? I'm one message away",
  emailLabel: "Your email",
  emailPlaceholder: "name@flowbite.com",
  subjectLabel: "Subject",
  subjectPlaceholder: "Let us know how we can help you",
  messageLabel: "Your message",
  messagePlaceholder: "Leave a comment...",
  buttonText: "Send message",
};

const ContactSection = () => {
  return (
    <section className="bg-gray-900">
      <div className="py-24 lg:py-32 px-4 mx-auto max-w-screen-md">
        <h2 className="text-3xl text-center lg:text-4xl text-white font-semibold sm:leading-[55px] sm:tracking-tight mb-4">
          {textContent.heading}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
          {textContent.subheading.split("<br></br>").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {textContent.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder={textContent.emailPlaceholder}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {textContent.subjectLabel}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-white bg-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder={textContent.subjectPlaceholder}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {textContent.messageLabel}
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-white bg-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder={textContent.messagePlaceholder}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            {textContent.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

import Link from "next/link";
import components2 from "../../Images/notionTemplate.png";
import Image from "next/image";

export default function CallToAction() {
  const CTAcopy = {
    CTAHeader1: "End of Procrastination",
    CTAHeader2: "Just ship it!",
    CTADescription:
      "Fuel your entrepreneurial journey with OneKadian. Turn your ideas into reality and launch your SaaS venture with confidence.",
    ButtonText1: "Get started",
    ButtonText2: "Learn More",
  };

  // Call to Action section
  return (
    <div className="bg-gray-900 py-24 lg:py-32 ">
      <div className="mx-auto sm:px-6 lg:px-8 ">
        <div className="relative overflow-hidden bg-gray-900 px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* Text section */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {CTAcopy.CTAHeader1}
              <br />
              {CTAcopy.CTAHeader2}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {CTAcopy.CTADescription}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {CTAcopy.ButtonText1}
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                {CTAcopy.ButtonText2}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          {/* Image section */}
          {/* small image similar to featured section  */}
          <div className="flex justify-center items-center">
            <Image
              src={components2}
              alt="Product screenshot"
              className="w-[48rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
          {/* Larger image on laptop screen  */}
          {/* <div className="mt-12 lg:mt-0 flex justify-center items-center">
            <Image
              src={notion}
              alt="Product screenshot"
              className="w-[48rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

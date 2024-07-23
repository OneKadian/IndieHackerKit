import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const TermsContent = [
  {
    heading: "1. Introduction",
    description:
      "By using the OneKadian service, you confirm your acceptance of, and agree to be bound by, these terms and conditions.",
  },
  {
    heading: "2. Agreement to Terms and Conditions",
    description:
      "This Agreement takes effect on the date on which you first use the OneKadian service.",
  },
  {
    heading: "3. Use of OneKadian",
    description:
      "OneKadian provides access to a code boilerplate, notion template, resource sheet, and launch instructions (collectively, the 'Resources'). These Resources are intended for personal use and for the purpose of helping you execute your software development ideas.",
  },
  {
    heading: "4. Access to Resources",
    description:
      "Upon subscribing to OneKadian, you will gain access to the Resources provided. You agree not to share or distribute these Resources to any third parties without express written consent from OneKadian.",
  },
  {
    heading: "5. Refunds",
    description:
      "For refund requests, please contact us directly at manageanirudh@gmail.com within 2 hours of your subscription purchase. We will evaluate refund requests on a case-by-case basis.",
  },
  {
    heading: "6. Disclaimer",
    description:
      "OneKadian makes no guarantees that the provided Resources will meet your specific requirements or that their use will be uninterrupted or error-free. Any express or implied warranties or conditions not stated in this Agreement are excluded and expressly disclaimed.",
  },
  {
    heading: "7. Limitation of Liability",
    description:
      "OneKadian shall not be liable for any indirect, special, or consequential loss, damage, costs, expenses, or claims arising out of or in connection with the use of our Resources or services. In no event shall our liability exceed the amount paid by you for your subscription.",
  },
  {
    heading: "8. Responsibilities",
    description:
      "OneKadian is not responsible for how you use the Resources provided. You are solely responsible for any consequences that may result from your use of these Resources.",
  },
  {
    heading: "9. General Terms and Law",
    description:
      "You acknowledge that no joint venture, partnership, employment, or agency relationship exists between you and OneKadian as a result of your use of our services. You agree not to hold yourself out as a representative, agent, or employee of OneKadian.",
  },
];

export default function TermsAndConditions() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Terms and Conditions
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
              <ul>
                {TermsContent.map((item, index) => (
                  <li key={index} className="mt-8">
                    <strong>{item.heading}</strong>
                    <br />
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

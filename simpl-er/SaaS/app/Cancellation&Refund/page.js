import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const CancellationRefundContent = [
  {
    header: "1. Refund Requests",
    description:
      "If you are not satisfied with your Indie Hacker Kit subscription, you may request a refund within 2 hours of your purchase. To request a refund, please send an email to manageanirudh@gmail.com with your refund request, including the reason for your request.",
  },
  {
    header: "2. Refund Eligibility",
    description:
      "Refund requests will be evaluated on a case-by-case basis. To be eligible for a refund, the following conditions must be met:",
  },
  {
    header: "3. Refund Process",
    description:
      "Once we receive your refund request, we will review it to determine if it meets the eligibility criteria. We reserve the right to approve or deny refund requests based on our discretion.",
  },
  {
    header: "4. No Obligation for Future Payments",
    description:
      "Upon cancellation and refund approval, you will not be obligated to make any future subscription payments. Your access to Indie Hacker Kit and its associated resources will be terminated.",
  },
  {
    header: "5. Contact Information",
    description:
      "For cancellation and refund inquiries, please contact us at:\n\nEmail: donotcontactme@gmail.com\n\n. Please note that this Cancellation and Refund Policy is subject to change without notice. It is advisable to review this policy periodically to stay informed of any updates or modifications",
  },
  {
    header: "6. Policy Changes",
    description:
      "Please note that this Cancellation and Refund Policy is subject to change without notice. It is advisable to review this policy periodically to stay informed of any updates or modifications.",
  },
];

export default function CancellationRefundPolicy() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Cancellation and Refund
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
                {CancellationRefundContent.map((item, index) => (
                  <li key={index} className="mt-8">
                    <strong>{item.header}</strong>
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

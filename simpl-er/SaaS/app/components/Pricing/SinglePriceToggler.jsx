"use client";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import CustomLink from "../Extras/CustomLink";
import DoneIcon from "@mui/icons-material/Done";

const pricingData = {
  title: "Simple no-tricks pricing",
  toggle: {
    monthly: "Monthly Billing",
    annual: "Annual Billing",
  },
  plan: {
    title: "Lifetime membership",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
    includedFeatures: [
      { icon: "DoneIcon", text: "Private forum access" },
      { icon: "DoneIcon", text: "Member resources" },
      { icon: "DoneIcon", text: "Entry to annual conference" },
      { icon: "DoneIcon", text: "Official member t-shirt" },
    ],
    billing: {
      annual: {
        price: 1200,
        type: "annual",
        text: "will be charged once annually",
      },
      monthly: { price: 120, type: "monthly", text: "will be charged monthly" },
    },
    button: {
      text: "Get access",
      className:
        "block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
    },
  },
};

export default function SinglePriceToggler({ userStatus }) {
  const [isYearly, setIsYearly] = useState(false);
  const toggleBilling = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold text-center tracking-tight text-gray-300 sm:text-4xl">
            {pricingData.title}
          </h2>
          <div className="mt-6 flex justify-center">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <span className="m-3 text-sm font-medium text-gray-300">
                {pricingData.toggle.monthly}
              </span>
              <Switch
                className="text-white"
                checked={isYearly}
                onChange={toggleBilling}
                sx={{
                  "& .MuiSwitch-track": {
                    backgroundColor: "#CBD5E0",
                  },
                }}
              />
              <span className="m-3 text-sm font-medium text-gray-300">
                {pricingData.toggle.annual}
              </span>
            </label>
          </div>
        </div>
        <div className="mx-auto mt-10 lg:mt-12 max-w-2xl rounded-3xl ring-1 ring-gray-800 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-300">
              {pricingData.plan.title}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-300">
              {pricingData.plan.description}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-700" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
            >
              {pricingData.plan.includedFeatures.map((feature) => (
                <li key={feature.text} className="flex gap-x-3">
                  <DoneIcon
                    className="h-6 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-2 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-800 py-10 text-center ring-1 ring-inset ring-gray-700 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-300">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-300">
                    {isYearly ? (
                      <span>${pricingData.plan.billing.annual.price / 12}</span>
                    ) : (
                      <span>${pricingData.plan.billing.monthly.price}</span>
                    )}
                  </span>
                  <span className="text-lg font-semibold leading-6 tracking-wide text-gray-300">
                    /Month
                  </span>
                </p>
                <div className="text-center mt-4 text-sm text-gray-300">
                  {isYearly
                    ? `$${pricingData.plan.billing.annual.price} ${pricingData.plan.billing.annual.text}`
                    : pricingData.plan.billing.monthly.text}
                </div>
                <div className="flex justify-center mt-10">
                  {/* <CustomLink
                    locationID="price-id"
                    modelType={
                      isYearly
                        ? pricingData.plan.billing.annual.type
                        : pricingData.plan.billing.monthly.type
                    }
                    user={userStatus}
                    display={pricingData.plan.button.text}
                    className={pricingData.plan.button.className}
                  /> */}
                  {/* <script src="https://gumroad.com/js/gumroad.js"></script>
                  <a
                    class="gumroad-button"
                    href="https://anirudhkadian1.gumroad.com/l/ewqdo"
                    data-gumroad-overlay-checkout="true"
                  >
                    Buy on
                  </a> */}
                  <script src="https://gumroad.com/js/gumroad.js"></script>
                  <a
                    class="gumroad-button"
                    href="https://anirudhkadian1.gumroad.com/l/ewqdo"
                  >
                    Buy on
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

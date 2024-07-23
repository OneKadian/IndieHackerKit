"use client";

import React, { useState } from "react";

const Estimates = () => {
  const checkboxOptions = [
    { text: "Design your whole website", time: 1 },
    { text: "Code all the components", time: 10 },
    { text: "Setup Authentication", time: 1 },
    { text: "Setup Payments", time: 2 },
    { text: "Choose and Setup Database", time: 1 },
    { text: "Ace all the non tech stuff", time: 12 },
    { text: "Find tools and resources", time: 1 },
    { text: "Setup mails and forms", time: 2 },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const estimatedTime = selectedOptions.reduce((totalTime, option) => {
    const matchingOption = checkboxOptions.find((item) => item.text === option);
    return totalTime + (matchingOption ? matchingOption.time : 0);
  }, 0);

  return (
    <div className="hidden lg:block bg-gray-900 sm:py-32 flex-row justify-center items-center">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl p-2 font-semibold text-white sm:leading-[55px] sm:tracking-tight">
          Spend where it matters most
        </h2>
        <p className="mb-5 font-light text-gray-300 sm:text-xl">
          Here's how many hours you save by not having to:
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="col-span-1">
            <div className="p-4">
              {checkboxOptions.slice(0, 4).map((option, index) => (
                <div className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    id={option.text}
                    checked={selectedOptions.includes(option.text)}
                    onChange={() => handleCheckboxChange(option.text)}
                    className={["bg-transparent"]}
                  />
                  <label
                    htmlFor={option.text}
                    className="ml-2 font-light text-gray-300 sm:text-xl"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <div className="p-4">
              {checkboxOptions
                .slice(4, checkboxOptions.length)
                .map((option, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      type="checkbox"
                      id={option.text}
                      checked={selectedOptions.includes(option.text)}
                      onChange={() => handleCheckboxChange(option.text)}
                      className={["bg-transparent"]}
                    />
                    <label
                      htmlFor={option.text}
                      className="ml-2 font-light text-gray-300 sm:text-xl"
                    >
                      {option.text}
                    </label>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-white">You Save:</p>
            <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {parseInt(estimatedTime)} hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimates;

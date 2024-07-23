"use client";

import React, { useState, useEffect } from "react";

const NumberStats = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Function to update the current time
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const addMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };

  // Add 30 minutes to the current time
  const estimatedLaunchTime = addMinutes(currentTime, 30);

  // Format the estimated time as "hh:mm A"
  const formattedTime = estimatedLaunchTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const numberCopy = [
    {
      number: 30,
      description: " minutes to turn Idea → Reality",
    },
    {
      number: formattedTime,
      description: "Estimated time of launch",
    },
    {
      number: 15,
      description: "Components to turn ideas into reality",
    },
  ];

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {numberCopy.map((option, index) => (
            <div className="mx-auto flex max-w-xs flex-col gap-y-4" key={index}>
              <dt className="text-base leading-7 text-gray-300">
                {option.description}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {option.number}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default NumberStats;

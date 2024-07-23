"use client";

import React, { useState, useEffect } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedIcon from "@mui/icons-material/Speed";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import tailwindLogo from "../../Images/TailwindCSSLogo.png";
import mailLogo from "../../Images/mailLogo.png";
import vercelLogo from "../../Images/vercelLogo.png";
import toolkit from "../../Images/toolkit.png";
import notion from "../../Images/notionTemplate.png";
import components from "../../Images/components.png";
import Image from "next/image";

const subpoints = [
  {
    name: "Turn Ideas into Reality",
    description:
      "Leave procrastination behind, Execute your ideas and see them come to life.",
    icon: RocketLaunchIcon,
    imageUrl: toolkit,
  },
  {
    name: "Instant Launch",
    description:
      "Save time and effort with our ready-to-use components and launch instructions.",
    icon: SpeedIcon,
    imageUrl: components,
  },
  {
    name: "Validation and Scaling",
    description:
      "Avoid overthinking and Launch fast, Validate your ideas and scale your SaaS venture.",
    icon: TrendingUpIcon,
    imageUrl: notion,
  },
];

const FeaturedSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const imageRotationTimer = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === subpoints.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);

    return () => {
      clearInterval(imageRotationTimer);
    };
  }, [isHovered]);

  const handleSubpointClick = (index) => {
    setCurrentImageIndex(index);
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  const featuredCopy = {
    featuredHeading: "Share Products not Ideas",
    featuredDescription:
      "You've read enough books, seen enough videos and followed enough founders, Its Time to build! ",
  };

  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 lg:flex lg:items-center">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-semibold font-semibold sm:leading-[55px] sm:tracking-tight text-white">
                Deploy faster
              </h2> */}
              {/* <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"> */}
              <h2 class="text-3xl p-2 lg:text-4xl font-semibold sm:leading-[55px] sm:tracking-tight text-white">
                {featuredCopy.featuredHeading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {featuredCopy.featuredDescription}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {subpoints.map((subpoint, index) => (
                  <div
                    key={index}
                    className={`relative pl-9 ${
                      currentImageIndex === index
                        ? "text-white cursor-pointer"
                        : "text-gray-500 cursor-pointer"
                    }`}
                    onClick={() => handleSubpointClick(index)}
                  >
                    <dt
                      className={`inline font-semibold ${
                        currentImageIndex === index
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      <subpoint.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {subpoint.heading}
                    </dt>{" "}
                    <dd className="inline">{subpoint.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={subpoints[currentImageIndex].imageUrl}
              alt="Product screenshot"
              className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;

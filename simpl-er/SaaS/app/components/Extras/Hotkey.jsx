"use client";

import { useEffect } from "react";

// Hotkey component to initiate instant checkout
const Hotkey = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "1") {
        // Redirect to the Gumroad URL
        window.location.href = "https://anirudhkadian1.gumroad.com/";
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className="hidden lg:block fixed top-1 right-0 m-4 p-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg"
      style={{ zIndex: 1000 }}
    >
      <p className="text-md font-semibold">
        Press{" "}
        <kbd className="px-2 py-1 text-md font-semibold text-black bg-gray-100 border border-gray-200 rounded-lg">
          1
        </kbd>{" "}
        anytime to buy
      </p>
    </div>
  );
};

export default Hotkey;

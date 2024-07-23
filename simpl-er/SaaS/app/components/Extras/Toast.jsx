"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Toast() {
  const [displayToast, setdisplayToast] = useState(true);
  return (
    <AnimatePresence>
      {displayToast && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          id="toast-bottom-right"
          className="fixed flex items-center w-max p-4 space-x-4 text-gray-500 bg-gray-300 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 lg:max-w-xs"
          role="alert"
        >
          <div className="flex">
            <div className="ms-3 text-sm font-normal">
              <span className="mb-1 text-sm font-semibold text-gray-900">
                You must be logged in
              </span>
              <div className="mb-2 mt-2 text-sm font-normal">
                Please login before moving forward
              </div>
              <div className="grid grid-cols-1 gap-2 h-10">
                <div></div>
                <div>
                  <Link
                    href="/sign-in"
                    className="inline-flex justify-center items-center w-3/4 h-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <button
              type="button"
              className={`ms-auto -mx-1.5 -my-1.5  items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8`}
              data-dismiss-target="#toast-interactive"
              aria-label="Close"
              onClick={() => {
                setdisplayToast(false);
              }}
            >
              <CloseIcon />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;

import React, { useState } from "react";
import { motion } from "framer-motion";

const AlertBox = () => {
  const [IsThere, setIsThere] = useState(true);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: IsThere ? 1 : 0, x: IsThere ? 0 : -100 }}
        onClick={() => {
          setIsThere((IsThere) => !IsThere);
        }}
        className="dark:bg-gray-800 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md"
      >
        <div className="flex items-center justify-center w-20 bg-red-500">
          <svg
            className="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
          </svg>
        </div>

        <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
            <span className="dark:text-red-400 font-Prompt font-semibold text-red-500">
              Error
            </span>
            <p className=" font-Acme md:text-xl text-sm text-gray-600">
              Please Check Your Internet Connections Or Refresh The Page
            </p>

            <p className=" font-Acme md:text-xl my-4 text-sm text-gray-600">
              OR
            </p>
            <p className=" font-Acme md:text-xl text-sm text-gray-600">
              Too many requests in a given amount of time ("rate limiting").
              <span> ( Free API)</span>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default AlertBox;

import React from "react";
import { Link } from "react-router-dom";

import Divider from "./Divider";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-24 h-28 mr-2 overflow-hidden border border-secondaryText rounded-2xl"></div>
        <div className="grow flex flex-col justify-start items-start">
          <h5 className="mx-1 text-2xl font-semibold">Cocos</h5>
          <p className="mx-1">Plant Organizer</p>
          <h5 className="mx-1 text-xl font-semibold">₹1,050</h5>
          <div className="flex justify-center items-center mt-1">
            <div className="w-5 mr-1 border border-black rounded-full">
              <div className="aspect-square bg-secondaryText rounded-full m-px"></div>
            </div>
            <div className="w-5 border border-black rounded-full">
              <div className="aspect-square bg-green-500 rounded-full m-px"></div>
            </div>
          </div>
        </div>
        <div className="w-10 h-10 flex justify-center items-center">
          <Link to="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-secondaryText"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";

const Footer = () => {
  return (
    <footer className="flex p-4 bg-white border-t shadow-lg">
      <div className=" flex flex-1 items-center ">
        <span className="text-gray-400 text-sm font-light tracking-wider">
          1 item left
        </span>
      </div>
      <div className="filters  flex-grow flex space-x-1">
        <button className="text-gray-500 font-sans font-light tracking-wider text-sm border rounded-md border-red-100 px-5 py-1 hover:border-red-300 duration-200">
          All
        </button>
        <button className="text-gray-500 font-sans font-light tracking-wider text-sm border border-transparent  rounded-md border-red-100 px-5 py-1 hover:border hover:border-red-300 duration-200">
          Active
        </button>
        <button className="text-gray-500 font-sans font-light tracking-wider text-sm border border-transparent  rounded-md border-red-100 px-5 py-1 hover:border hover:border-red-300 duration-200">
          Completed
        </button>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

interface FooterProps {
  todosCount: number;
}
const Footer = ({ todosCount }: FooterProps) => {
  return (
    <footer className="flex p-4 bg-white border-t shadow-lg dark:bg-zinc-800 dark:border-t-zinc-700">
      <div className="flex items-center flex-1 ">
        <span className="text-sm font-light tracking-wider text-gray-400">
          {todosCount} {todosCount === 1 ? "item" : "items"} left
        </span>
      </div>
      <div className="flex flex-grow space-x-1 filters">
        <button className="px-5 py-1 font-sans text-sm font-light tracking-wider text-gray-500 duration-200 border border-red-100 rounded-sm hover:border-red-300">
          All
        </button>
        <button className="px-5 py-1 font-sans text-sm font-light tracking-wider text-gray-500 duration-200 border border-transparent border-red-100 rounded-sm hover:border hover:border-red-300">
          Active
        </button>
        <button className="px-5 py-1 font-sans text-sm font-light tracking-wider text-gray-500 duration-200 border border-transparent border-red-100 rounded-sm hover:border hover:border-red-300">
          Completed
        </button>
      </div>
    </footer>
  );
};

export default Footer;

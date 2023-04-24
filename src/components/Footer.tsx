import React from "react";
import { Link, useLocation } from "react-router-dom";
interface FooterProps {
  todosCount: number;
}
const Footer = ({ todosCount }: FooterProps) => {
  const location = useLocation();

  return (
    <footer className="flex p-4 bg-white border-t shadow-lg dark:bg-zinc-800 dark:border-t-zinc-700">
      <div className="flex items-center flex-1 ">
        <span className="text-sm font-light tracking-wider text-gray-400">
          {todosCount} {todosCount === 1 ? "item" : "items"} left
        </span>
      </div>
      <div className="flex flex-grow space-x-1 filters">
        <Link
          to={"/"}
          className={`px-5 py-1 font-sans text-sm font-light tracking-wider text-gray-500 duration-200 border ${
            location.pathname === "/" ? "border-red-100" : "border-transparent"
          } rounded-sm hover:border-red-300`}
        >
          All
        </Link>
        <Link
          to={"/active"}
          className={`px-5 py-1 font-sans text-sm font-light tracking-wider text-gray-500 duration-200 border ${
            location.pathname === "/active"
              ? "border-red-100"
              : "border-transparent"
          } rounded-sm hover:border-red-300`}
        >
          Active
        </Link>
        <Link
          to={"/completed"}
          className={`px-5 py-1 font-sans text-sm font-light tracking-wider text-gray-500 duration-200 border ${
            location.pathname === "/completed"
              ? "border-red-100"
              : "border-transparent"
          } rounded-sm hover:border-red-300`}
        >
          Completed
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

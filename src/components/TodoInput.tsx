import React from "react";

const TodoInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="block w-full py-5 pr-5 mt-4 font-sans text-2xl font-light shadow-md outline-none pl-14 placeholder:font-thin placeholder:italic placeholder:opacity-40 placeholder:maroon dark:bg-zinc-800 dark:text-zinc-400"
      />
      <label
        htmlFor="checkAll"
        className=" before:content-['❯'] before:text-2xl before:text-gray-500 absolute top-5 left-7 cursor-pointer rotate-90"
      ></label>
      <input type="checkbox" className="hidden" id="checkAll" />
    </div>
  );
};

export default TodoInput;

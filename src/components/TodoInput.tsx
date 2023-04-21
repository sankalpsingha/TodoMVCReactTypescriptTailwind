import React from "react";

const TodoInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What needs to be done?"
        className=" py-5 pr-5 pl-14  mt-4 block w-full placeholder:font-thin placeholder:italic placeholder:opacity-40 placeholder:maroon text-2xl outline-none font-sans font-light shadow-md  "
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

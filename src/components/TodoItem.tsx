import React from "react";

const TodoItem = () => {
  return (
    <div className="todo-item p-5 bg-white flex justify-between items-center border-b border-gray-200 last-of-type:border-none">
      <div className="input-fields flex">
        <input
          type="checkbox"
          className="  h-5 w-5 translate-y-1 rounded-full accent-green-600 hover:accent-green-700 duration-200"
        />
        <label className=" text-xl px-3 font-light tracking-wider">
          This is a cool todo asdf asdf as lore
        </label>
      </div>
      <button className=" after:content-['×'] text-3xl  w-7 cursor-pointer text-rose-900 hover:text-red-400 duration-200 opacity-30 hover:opacity-70 font-light " />
    </div>
  );
};

export default TodoItem;

import React from "react";
import TodoInterface from "../interfaces/TodoInterface";
interface TodoItemProps {
  todo: TodoInterface;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between p-5 bg-white border-b border-gray-200 todo-item last-of-type:border-none dark:bg-zinc-800 dark:text-zinc-300 dark:border-b-zinc-700 ">
      <div className="flex input-fields">
        <input
          type="checkbox"
          className="w-5 h-5 duration-200 translate-y-1 rounded-full accent-green-600 hover:accent-green-700"
          checked={todo.completed}
        />
        <span
          className={`px-3 text-xl font-light tracking-wider dark:text-zinc-400 ${
            todo.completed
              ? "line-through dark:text-zinc-600 text-zinc-400"
              : ""
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button className=" after:content-['×'] text-3xl  w-7 cursor-pointer text-rose-900 hover:text-red-500 duration-200 opacity-30 hover:opacity-70 font-light dark:text-rose-200" />
    </div>
  );
};

export default TodoItem;

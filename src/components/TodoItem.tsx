import React from "react";
import TodoInterface from "../interfaces/TodoInterface";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
interface TodoItemProps {
  todo: TodoInterface;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const updateTodo = () => {
    return axios.put(`http://localhost:3001/todos/${todo.id}`, {
      title: todo.title.trim(),
      completed: !todo.completed,
    });
  };
  const deleteTodo = () => {
    return axios.delete(`http://localhost:3001/todos/${todo.id}`);
  };
  const queryClient = useQueryClient();
  const markAsCompleted = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleCheckClicked = () => {
    markAsCompleted.mutate();
  };
  const handleDeleteClicked = () => {
    deleteTodoMutation.mutate();
  };
  return (
    <div className="flex items-center justify-between p-5 bg-white border-b border-gray-200 todo-item last-of-type:border-none dark:bg-zinc-800 dark:text-zinc-300 dark:border-b-zinc-700 ">
      <div className="flex input-fields">
        <input
          type="checkbox"
          className="w-5 h-5 duration-200 translate-y-1 rounded-full accent-green-600 hover:accent-green-700"
          checked={todo.completed}
          onChange={handleCheckClicked}
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
      <button
        onClick={handleDeleteClicked}
        className=" after:content-['×'] text-3xl  w-7 cursor-pointer text-rose-900 hover:text-red-500 duration-200 opacity-30 hover:opacity-70 font-light dark:text-rose-200"
      />
    </div>
  );
};

export default TodoItem;

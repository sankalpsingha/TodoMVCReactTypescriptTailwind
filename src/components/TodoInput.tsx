import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const TodoInput = () => {
  const queryClient = useQueryClient();
  const [todoInput, setTodoInput] = React.useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    console.log(todoInput);
    setTodoInput("");
    mutation.mutate(todoInput);
  };
  const postTodo = (todo: string) => {
    return axios.post("http://localhost:3001/todos", {
      title: todo,
      completed: false,
    });
  };
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="block w-full py-5 pr-5 mt-4 font-sans text-2xl font-light shadow-md outline-none pl-14 placeholder:font-thin placeholder:italic placeholder:opacity-40 placeholder:maroon dark:bg-zinc-800 dark:text-zinc-400"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <label
          htmlFor="checkAll"
          className=" before:content-['❯'] before:text-2xl before:text-gray-500 absolute top-5 left-7 cursor-pointer rotate-90"
        ></label>
        <input type="checkbox" className="hidden" id="checkAll" />
      </form>
    </div>
  );
};

export default TodoInput;

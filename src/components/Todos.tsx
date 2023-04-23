import React from "react";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TodoInterface from "../interfaces/TodoInterface";
import Footer from "./Footer";
const fetchTodos = () => {
  return axios.get("http://localhost:3001/todos").then((res) => res.data);
};

const Todos = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  const incompleteTodosCount = data?.filter(
    (todo: TodoInterface) => !todo.completed
  ).length;

  if (isLoading)
    return <div className="p-5 italic dark:text-zinc-400">Loading...</div>;
  if (isError)
    return <div className="p-5 italic dark:text-zinc-400">Error</div>;
  return (
    <div>
      {data?.map((todo: TodoInterface) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <Footer todosCount={incompleteTodosCount} />
    </div>
  );
};

export default Todos;

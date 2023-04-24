import React from "react";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TodoInterface from "../interfaces/TodoInterface";
import Footer from "./Footer";
const fetchTodos = () => {
  return axios.get("http://localhost:3001/todos").then((res) => res.data);
};

interface TodosProps {
  filter?: "all" | "active" | "completed";
}

const Todos = (props: TodosProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  let filteredTodos = data || [];

  if (props.filter === "active") {
    filteredTodos =
      data?.filter((todo: TodoInterface) => !todo.completed) || [];
  } else if (props.filter === "completed") {
    filteredTodos = data?.filter((todo: TodoInterface) => todo.completed) || [];
  }

  const incompleteTodosCount = data?.filter(
    (todo: TodoInterface) => !todo.completed
  ).length;

  if (isLoading)
    return <div className="p-5 italic dark:text-zinc-400">Loading...</div>;
  if (isError)
    return <div className="p-5 italic dark:text-zinc-400">Error</div>;
  return (
    <div>
      {filteredTodos.map((todo: TodoInterface) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <Footer todosCount={incompleteTodosCount} />
    </div>
  );
};

export default Todos;

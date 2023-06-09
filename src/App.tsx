import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import Todos from "./components/Todos";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();
const app = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="absolute w-full h-full bg-cream dark:bg-zinc-900">
        <div className="max-w-xl px-3 mx-auto mt-6 ">
          <DarkModeToggle />
          <Header />
          <TodoInput />
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/active" element={<Todos filter="active" />} />
            <Route path="/completed" element={<Todos filter="completed" />} />
          </Routes>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default app;

import React from "react";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import Todos from "./components/Todos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="absolute w-full h-full bg-cream dark:bg-zinc-900">
        <div className="max-w-xl px-3 mx-auto mt-6 ">
          <DarkModeToggle />
          <Header />
          <TodoInput />
          <Todos />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

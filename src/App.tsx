import React from "react";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
function App() {
  return (
    <div className="absolute w-full h-full bg-cream dark:bg-zinc-900">
      <div className="max-w-xl px-3 mx-auto mt-6 ">
        <DarkModeToggle />
        <Header />
        <TodoInput />
        <TodoItem />
        <Footer />
      </div>
    </div>
  );
}

export default App;

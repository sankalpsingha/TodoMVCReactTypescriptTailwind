import React from "react";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className=" max-w-xl mt-6 mx-auto px-3 ">
      <Header />
      <TodoInput />
      <TodoItem />
      <Footer />
    </div>
  );
}

export default App;

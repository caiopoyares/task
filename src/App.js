import React from "react";
import "./App.scss";
import TodoList from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <div className="bg_text">Get s*** done!</div>
      <TodoList />
      <footer>
        Created and designed by{" "}
        <a
          className="my-name"
          href="https://github.com/caiopoyares/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Caio Poyares
        </a>
        .
      </footer>
    </div>
  );
}

export default App;

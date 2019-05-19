import React, { useState } from "react";
import "./App.scss";
import TodoList from "./components/Todolist";

function App() {
  const [lightMode, setLightMode] = useState(true);

  return (
    <div className={lightMode ? "App light-mode" : "App"}>
      <div className="mode-switcher">
        <span className="mode-switcher__icon" style={{ color: "#ffd411" }}>
          ☀
        </span>
        <input
          type="checkbox"
          id="switch"
          onClick={() => setLightMode(!lightMode)}
        />
        <label htmlFor="switch">Mudar tema</label>
        <span
          className="mode-switcher__icon"
          style={lightMode ? { color: "#376db3" } : { color: "white" }}
        >
          ☾
        </span>
      </div>
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

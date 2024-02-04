import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox/QuestionBox";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

function App() {
  const [theme, setTheme] = useState("white");

  return (
    <div className="App" style={{ backgroundColor: theme }}>
      <div className="top-bar">
        <div className="logo">
          <h1>React Quiz</h1>
        </div>
        <div
          className="theme-btn"
          style={{ backgroundColor: theme === "white" ? "black" : "white" }}
        >
          {theme === "white" ? (
            <Moon size={30} color="white" onClick={() => setTheme("black")} />
          ) : (
            <Sun size={30} onClick={() => setTheme("white")} />
          )}
        </div>
      </div>
      <QuestionBox questions={questions} />
    </div>
  );
}

export default App;

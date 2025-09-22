import React, { useEffect, useState } from "react";
import InputTodo from "./components/inputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch from backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:5000/todos");
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">To-Do App</h1>
      <InputTodo setTodos={setTodos} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

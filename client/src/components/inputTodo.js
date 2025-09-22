import React, { useState } from "react";

function InputTodo({ setTodos }) {
  const [description, setDescription] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      const newTodo = await response.json();
      setTodos((prev) => [...prev, newTodo]);
      setDescription("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={addTodo} className="todo-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a task..."
        className="todo-input"
      />
      <button type="submit" className="todo-btn">Add</button>
    </form>
  );
}

export default InputTodo;

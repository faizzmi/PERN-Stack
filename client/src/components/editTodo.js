import React, { useState } from "react";

function EditTodo({ todo, todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(todo.description);

  const updateTodo = async () => {
    try {
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: newDesc }),
      });

      setTodos(
        todos.map((t) =>
          t.todo_id === todo.todo_id ? { ...t, description: newDesc } : t
        )
      );
      setIsEditing(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return isEditing ? (
    <div className="edit-container">
      <input
        type="text"
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
        className="edit-input"
      />
      <button onClick={updateTodo} className="save-btn">Save</button>
      <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
    </div>
  ) : (
    <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
  );
}

export default EditTodo;

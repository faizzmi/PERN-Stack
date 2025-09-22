import React from "react";
import EditTodo from "./editTodo";

function ListTodo({ todos, setTodos }) {
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.todo_id} className="todo-item">
          <span>{todo.description}</span>
          <div>
            <EditTodo todo={todo} todos={todos} setTodos={setTodos} />
            <button onClick={() => deleteTodo(todo.todo_id)} className="delete-btn">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;

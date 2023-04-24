import React from "react";
import { useState } from "react";

function TaskForm({ createTasks }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTasks(title);
  };

  return (
    <div onSubmit={handleSubmit}>
      <form action="">
        <input
          placeholder="Escriba Tú Tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;

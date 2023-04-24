import { useState, useEffect } from "react";
import { tasks as data } from "./task.js";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

export function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTasks(tilteTask) {
    setTasks([
      ...tasks,
      {
        title: tilteTask,
        _id: tasks.length,
        description: "Nueva Tarea",
      },
    ]);
  }

  return (
    <>
      <TaskForm createTasks={createTasks} />
      <TaskList tasks={tasks} />
    </>
  );
}

import { useState, useEffect } from "react";
import { tasks as data} from "./task.js";

function Appjs() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>No Tengo Tareas</h1>;
  }

  return (
    <div key={tasks.id}>
      {tasks.map((task) => (
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Appjs;

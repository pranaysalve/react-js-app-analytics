import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
      console.log("stored tasks", { tasks });
    }
  }, []);

  const onTaskSubmit = (task) => {
    if (editIndex === null) {
      setTasks([...tasks, task]);
      localStorage.setItem("tasks", JSON.stringify(task));
    } else {
      tasks[editIndex] = task;
      setTasks([...tasks]);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setEditIndex(null);
    }
  };

  const onDelete = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const onEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <TaskForm onTaskSubmit={onTaskSubmit} indexVal={editIndex} />
      <TaskList tasks={tasks} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Inputbox from "./Inputbox";

const TaskForm = ({ onTaskSubmit, indexVal }) => {
  const [task, setTask] = useState({
    taskName: "",
    taskDescription: "",
    dueDate: "",
  });

  const handleInputChange = (name, value) => {
    setTask({ ...task, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(task);
    setTask({ taskName: "", taskDescription: "", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Inputbox
            type="text"
            name="taskName"
            placeholder="Add Task"
            value={task.taskName}
            handleInputChange={handleInputChange}
            required={true}
          />
          <Inputbox
            type="text"
            name="taskDescription"
            placeholder="Task Description"
            value={task.taskDescription}
            handleInputChange={handleInputChange}
            required={true}
          />
          <Inputbox
            type="date"
            name="dueDate"
            value={task.dueDate}
            handleInputChange={handleInputChange}
            required={true}
          />
        </div>
        <button className="my-4 bg-blue-500" type="submit">
          {indexVal === null ? "Add Task" : "Update Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

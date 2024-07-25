import { useState } from "react";
import { useTasks } from "../models/use-tasks";

export const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTask(title);
        setTitle("");
      }}
    >
      <label>
        Title:{" "}
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </label>
      <button>Add task</button>
    </form>
  );
};

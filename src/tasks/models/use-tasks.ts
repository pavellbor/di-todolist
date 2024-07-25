import { useEffect, useState } from "react";
import { useStrictContext } from "../../shared/hooks";
import { Task, TasksRepository } from "../types";
import { tasksDepsContext } from "../context";

export const useTasks = () => {
  const { saveTasks, getTasks } =
    useStrictContext<TasksRepository>(tasksDepsContext);
  const [tasks, setTasks] = useState<Task[]>(() => getTasks());

  const addTask = (title: string) => {
    const newTask = { id: Date.now(), title, done: false };
    setTasks((tasks) => [newTask, ...tasks]);
  };

  const toggleTask = (taskId: number) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !!task.done } : task
      )
    );
  };

  const removeTask = (taskId: number) => {
    console.log(taskId)
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  const changeOwner = (taskId: number, ownerId: number) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, ownerId } : task))
    );
  };

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks, saveTasks]);

  return {
    tasks,
    addTask,
    toggleTask,
    removeTask,
    changeOwner,
  };
};

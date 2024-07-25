import { TasksRepository } from "../../tasks/types";

export const getFromStorage = <T>(key: string): T => {
  try {
    const rawValue = localStorage.getItem(key);

    return typeof rawValue === "string" ? JSON.parse(rawValue) : rawValue;
  } catch (err) {
    console.error(`Can't get item from storage by key ${key}`);
    throw err;
  }
};

export const saveToStorage = (key: string, value: unknown) => {
  try {
    const stringifiedValue = JSON.stringify(value);

    localStorage.setItem(key, stringifiedValue);
  } catch (err) {
    console.error(`Can't save item to storage by key ${key}`);
    throw err;
  }
};

const TASKS_STORAGE_KEY = "tasks";
export const tasksRepository: TasksRepository = {
  getTasks() {
    return getFromStorage(TASKS_STORAGE_KEY) || [];
  },
  saveTasks(tasks) {
    return saveToStorage(TASKS_STORAGE_KEY, tasks);
  },
};

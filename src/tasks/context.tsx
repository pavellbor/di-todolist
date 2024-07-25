import { createContext } from "react";
import { TasksRepository } from "./types";

export const tasksDepsContext = createContext<TasksRepository | null>(null);
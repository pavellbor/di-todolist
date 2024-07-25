import { ReactNode } from "react";
import { useTasks } from "../models/use-tasks";
import { TaskItem } from "./task-item";
import { OwnerSelectParams } from "../types";

export const TaskList = ({
  renderOwnerSelect,
}: {
  renderOwnerSelect: (params: OwnerSelectParams) => ReactNode;
}) => {
  const { tasks } = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          renderOwnerSelect={renderOwnerSelect}
        />
      ))}
    </ul>
  );
};

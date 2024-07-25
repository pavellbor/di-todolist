import { ReactNode } from "react";
import { useTasks } from "../models/use-tasks";
import { OwnerSelectParams, Task } from "../types";

export const TaskItem = ({
  task,
  renderOwnerSelect,
}: {
  task: Task;
  renderOwnerSelect: (params: OwnerSelectParams) => ReactNode;
}) => {
  const { toggleTask, changeOwner, removeTask } = useTasks();
  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
      />
      {task.title}
      {"    "}
      {renderOwnerSelect({
        ownerId: task.ownerId,
        onChangeOwnerId: (ownerId: number) => changeOwner(task.id, ownerId),
      })}
      <button onClick={() => removeTask(task.id)}>delete</button>
    </li>
  );
};

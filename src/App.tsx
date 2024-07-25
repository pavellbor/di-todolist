import { tasksRepository } from "./libs/storage";
import { tasksDepsContext } from "./tasks/context";
import { OwnerSelectParams } from "./tasks/types";
import { TaskForm } from "./tasks/ui/task-form";
import { TaskList } from "./tasks/ui/task-list";
import { UserSelect } from "./users";

export function App() {
  return (
    <tasksDepsContext.Provider value={tasksRepository}>
      <TaskForm />
      <TaskList
        renderOwnerSelect={({
          ownerId,
          onChangeOwnerId,
        }: OwnerSelectParams) => (
          <UserSelect
            label="owner"
            userId={ownerId}
            onUserIdChange={onChangeOwnerId}
          />
        )}
      ></TaskList>
    </tasksDepsContext.Provider>
  );
}

export type Task = {
    id: number;
    title: string;
    done: boolean;
    ownerId?: number;
  };
  

export type OwnerSelectParams = {
    ownerId: number | undefined,
    onChangeOwnerId: (ownerId: number) => void
}

export type TasksRepository = {
    getTasks: () => Task[],
    saveTasks: (tasks: Task[]) => void
}
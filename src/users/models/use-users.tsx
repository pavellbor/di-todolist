import { useState } from "react";

type User = {
  id: number;
  name: string;
};

export const useUsers = () => {
  const [users] = useState<User[]>([
    {
      id: 1,
      name: "User-1",
    },
    {
      id: 2,
      name: "User-2",
    },
  ]);

  return users;
};

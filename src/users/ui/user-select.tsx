import { useUsers } from "../models/use-users";

export const UserSelect = ({
  label,
  userId,
  onUserIdChange,
}: {
  label: string;
  userId: number | undefined;
  onUserIdChange: (userId: number) => void;
}) => {
  const users = useUsers();

  return (
    <label>
      {label}:
      <select value={userId} onChange={(e) => onUserIdChange(Number(e.target.value))}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </label>
  );
};

import React from "react";
import TodoApp from "../../features/todo";
import { useAppSelector } from "../../store";

const TodoAppPage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  return <div>{user ? <TodoApp /> : <div>You must log in</div>}</div>;
};

export default TodoAppPage;

import React from "react";
import TodoApp from "../features/TodoApp/TodoApp";
import { useAppSelector } from "../store";

const CounterPage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  return <div>{user ? <TodoApp /> : <div>You must log in</div>}</div>;
};

export default CounterPage;

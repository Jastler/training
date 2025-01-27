import { shallowEqual } from "react-redux";
import { useAppSelector } from "../../store";
import { TodoItem } from "./TodoItem";

import styles from "./index.module.scss";

export const TodosList = () => {
  const todoIds = useAppSelector(
    (state) => state.todos.map((todo) => todo.id),
    shallowEqual
  );

  return (
    <ol>
      {todoIds.map((id) => (
        <li key={id}>
          <TodoItem id={id} />
        </li>
      ))}
    </ol>
  );
};

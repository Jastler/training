import { FC, KeyboardEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import { deleteTodos, toggleTodo, updateTodo } from "../../store/todosSlice";

import styles from "./index.module.scss";

export type TodoProps = { id: string };

export const TodoItem: FC<TodoProps> = ({ id }) => {
  const todo = useAppSelector((state) =>
    state.todos.find((todo) => todo.id === id)
  );

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo?.title);
  const dispatch = useAppDispatch();

  if (!todo) return null;

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(updateTodo({ ...todo, title: text || "" }));
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.todo}>
      {isEditing ? (
        <input
          type="text"
          onBlur={handleBlur}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <p
          style={{ cursor: "pointer" }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.title}
        </p>
      )}
      <input
        type="checkbox"
        checked={todo.checked}
        onClick={() => dispatch(toggleTodo(todo.id))}
      />
      <div
        className={styles.delete}
        onClick={() => dispatch(deleteTodos(todo.id))}
      >
        ❌
      </div>
    </div>
  );
};

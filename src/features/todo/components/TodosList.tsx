import { useMemo } from "react";
import { shallowEqual } from "react-redux";
import { List, Paper } from "@mui/material";
import { useAppSelector } from "../../../store";
import { TodoItem } from "./TodoItem";

export const TodosList = () => {
  const todos = useAppSelector((state) => state.todos.todos, shallowEqual);
  const todoIds = useMemo(() => todos.map((todo) => todo.id), [todos]);

  const loading = useAppSelector((state) => state.todos.loading);

  if (loading) return <p>Loading...</p>;

  return (
    <Paper style={{ padding: "16px" }}>
      <List>
        {todoIds.map((id) => (
          <li key={id}>
            <TodoItem id={id} />
          </li>
        ))}
      </List>
    </Paper>
  );
};

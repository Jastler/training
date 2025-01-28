import { FC, KeyboardEvent, memo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { deleteTodo, updateTodo } from "../../store/todosSlice";
import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./index.module.scss";
import { MainButton } from "../../componets/UI/Buttons/MainButton";

export type TodoProps = { id: string };

export const TodoItem: FC<TodoProps> = memo(({ id }) => {
  const todo = useAppSelector(
    (state) => state.todos.todos.find((t) => t.id === id),
    (prev, next) =>
      prev?.checked === next?.checked && prev?.title === next?.title
  );
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo?.title);
  const dispatch = useAppDispatch();

  if (!todo) return null;

  const handleBlur = () => {
    setIsEditing(false);
  };

  const submit = async () => {
    try {
      await dispatch(updateTodo({ ...todo, title: text || "" })).unwrap();
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  const handleToggleTodo = () => {
    dispatch(updateTodo({ ...todo, checked: !todo.checked }));
  };

  return (
    <div className={styles.todo}>
      {isEditing ? (
        <ListItem>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginLeft: "28px",
            }}
          >
            <TextField
              type="text"
              onBlur={handleBlur}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              size="small"
            />
            <MainButton text="Save" onClick={submit} />
          </Box>
        </ListItem>
      ) : (
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox checked={todo.checked} onClick={() => handleToggleTodo()} />
          <ListItemText
            onDoubleClick={() => setIsEditing(true)}
            primary={todo.title}
          />
        </ListItem>
      )}
    </div>
  );
});

import { FC, useState, KeyboardEvent } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";
import { useAppDispatch } from "../../store";
import { addTodo } from "../../store/todosSlice";

export type TextInputWithAddButtonProps = {
  placeholder?: string;
  buttonProps?: {
    buttonText: string;
  };
};

export const TextInputWithAddButton: FC<TextInputWithAddButtonProps> = ({
  placeholder = "Add Todo",
  buttonProps = { buttonText: "Add" },
}) => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const submit = () => {
    if (!text.trim()) return;
    dispatch(addTodo({ title: text, checked: false }));
    setText("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <Paper style={{ padding: "16px", margin: "15px 0" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          size="small"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={submit}
          sx={{
            minWidth: "100px",
          }}
        >
          {buttonProps.buttonText}
        </Button>
      </Box>
    </Paper>
  );
};

import { Box, Typography } from "@mui/material";
import { TextInputWithAddButton } from "../../componets/UI/TextInputWithAddButton";
import { TodosList } from "./TodosList";

const TodoApp = () => {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Todo App
      </Typography>
      <Box>
        <TodosList />
      </Box>
      <Box>
        <TextInputWithAddButton />
      </Box>
    </>
  );
};

export default TodoApp;

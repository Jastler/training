import { Box, Container, Typography } from "@mui/material";

import { TextInputWithAddButton } from "../../components/TextInputWithAddButton";
import { TodosList } from "./components/TodosList";

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

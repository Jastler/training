import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { Add, Remove, Edit } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "@store";
import { decrement, increment, setCounter } from "@store/counterSlice";
import { openModal } from "@store/modalSlice";

const Counter: React.FC = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleSetCounter = () => {
    dispatch(openModal({ type: "setCounter" }));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={3}
    >
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, md: 5 },
          textAlign: "center",
          borderRadius: 3,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Counter: {counter}
        </Typography>

        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(increment())}
            startIcon={<Add />}
            sx={{ px: 3 }}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(decrement())}
            startIcon={<Remove />}
            sx={{ px: 3 }}
          >
            Decrement
          </Button>
        </Box>

        <Button
          variant="outlined"
          color="info"
          onClick={handleSetCounter}
          startIcon={<Edit />}
          sx={{ mt: 3, width: "100%" }}
          data-testid={"set-value"}
        >
          Set Value
        </Button>
      </Paper>
    </Box>
  );
};

export default Counter;

import { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { setCounter } from "@store/counterSlice";
import { closeModal } from "@store/modalSlice";
import { useAppDispatch } from "@store/index";
import InputNumber from "@components/shared/Inputs/NumberInput";

const SetCounterModal = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    dispatch(setCounter(parseInt(inputValue)));
    dispatch(closeModal());
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        maxWidth: 400,
        width: "100%",
        textAlign: "center",
        borderRadius: 2,
      }}
      role="counterModal"
    >
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Set Counter Value
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Enter a number to update the counter.
      </Typography>

      <InputNumber
        label="Enter number"
        value={inputValue}
        onChange={setInputValue}
      />

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => dispatch(closeModal())}
          sx={{ minWidth: 100 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleConfirm}
          sx={{ minWidth: 100 }}
          disabled={!inputValue}
        >
          Confirm
        </Button>
      </Box>
    </Paper>
  );
};

export default SetCounterModal;

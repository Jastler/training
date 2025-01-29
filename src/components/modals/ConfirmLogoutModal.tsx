import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";

interface ConfirmLogoutModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmLogoutModal: React.FC<ConfirmLogoutModalProps> = ({
  onClose,
  onConfirm,
}) => {
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
    >
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Are you sure you want to log out?
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Your data will remain safe, and you can always log in again.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={onClose}
          sx={{ minWidth: 100 }}
        >
          No
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={onConfirm}
          sx={{ minWidth: 100 }}
        >
          Yes
        </Button>
      </Box>
    </Paper>
  );
};

export default ConfirmLogoutModal;

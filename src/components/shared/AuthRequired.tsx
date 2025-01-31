import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useAppDispatch } from "@store/index";
import { openModal } from "@store/modalSlice";

type AuthRequiredProps = {
  message?: string;
};

const AuthRequired: React.FC<AuthRequiredProps> = ({
  message = "To access this page, please log in to your account.",
}) => {
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" px={2}>
      <Paper
        elevation={3}
        sx={{
          padding: { xs: 3, md: 5 },
          textAlign: "center",
          maxWidth: 400,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          You must log in
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          {message}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(openModal({ type: "auth" }));
          }}
          fullWidth
        >
          Go to Login
        </Button>
      </Paper>
    </Box>
  );
};

export default AuthRequired;

import { useAppDispatch, useAppSelector } from "@store/index";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { openModal } from "@store/modalSlice";
import { ROUTES } from "@routes/index";
import DefaultAnimation from "@components/shared/animations/DefaultAnimation";

const Home = () => {
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <DefaultAnimation>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 500,
          borderRadius: 4,
          background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {user ? `Welcome, ${user.email}!` : "Welcome to Our App!"}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {user
            ? "Explore and enjoy all the features we have prepared for you!"
            : "Join us today and get access to awesome features!"}
        </Typography>

        <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "center" }}>
          {user ? (
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate(`${ROUTES.todoApp}`)}
            >
              Go to Tasks
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(openModal({ type: "auth" }))}
            >
              Login / Register
            </Button>
          )}
        </Box>
      </Paper>
    </DefaultAnimation>
  );
};

export default Home;

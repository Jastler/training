import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store";
import { logoutUser } from "../../../services/authService";
import { clearUser } from "../../../store/authSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>

        {/* Посилання для навігації */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            sx={{
              "&.active": { textDecoration: "underline" },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/counter"
            sx={{
              "&.active": { textDecoration: "underline" },
            }}
          >
            Counter
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/todo-app"
            sx={{
              "&.active": { textDecoration: "underline" },
            }}
          >
            Todo App
          </Button>

          {/* Login/Logout */}
          {!user ? (
            <Button
              color="inherit"
              component={NavLink}
              to="/login"
              sx={{
                "&.active": { textDecoration: "underline" },
              }}
            >
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

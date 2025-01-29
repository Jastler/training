import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch, useAppSelector } from "@store";
import { logoutUser } from "@services/authService";
import { clearUser } from "@store/authSlice";
import { closeModal, openModal } from "@store/modalSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await logoutUser();
    dispatch(clearUser());
    dispatch(closeModal());
  };

  const handleOpenLoginModal = () => {
    dispatch(openModal({ type: "auth" }));
  };

  const handleOpenLogOutModal = () => {
    dispatch(
      openModal({
        type: "logout",
        props: {
          onConfirm: handleLogout,
        },
      })
    );
  };

  // Открытие/закрытие меню
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Навигационные ссылки
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Counter", path: "/counter" },
    { text: "Todo App", path: "/todo-app" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar style={{ alignItems: "center" }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={NavLink}
              to={item.path}
              sx={{
                position: "relative",
                "&.active": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "8px",
                  fontWeight: "bold",
                },
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "0.2s ease-in-out",
                },
              }}
            >
              {item.text}
            </Button>
          ))}

          {!user ? (
            <Button
              onClick={handleOpenLoginModal}
              sx={{
                backgroundColor: "#4caf50",
                color: "#fff",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={handleOpenLogOutModal}
              sx={{
                backgroundColor: "#d32f2f",
                color: "#fff",
                "&:hover": { backgroundColor: "#b71c1c" },
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>

      {/* Бургер-меню (Drawer) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { width: 250, backgroundColor: "#f5f5f5" },
        }}
      >
        <Toolbar style={{ backgroundColor: "#1976d2" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            My Application
          </Typography>
        </Toolbar>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  margin: "10px",
                  "&.active": {
                    backgroundColor: "#1976d2",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  },
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                    transition: "0.2s ease-in-out",
                  },
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />

        <List>
          <ListItem disablePadding>
            {!user ? (
              <ListItemButton
                onClick={() => {
                  handleOpenLoginModal();
                  handleDrawerToggle();
                }}
                sx={{
                  backgroundColor: "#4caf50",
                  margin: "10px",
                  borderRadius: "8px",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#388e3c" },
                }}
              >
                <ListItemText primary="Login" sx={{ textAlign: "center" }} />
              </ListItemButton>
            ) : (
              <ListItemButton
                onClick={() => {
                  handleOpenLogOutModal();
                  handleDrawerToggle();
                }}
                sx={{
                  backgroundColor: "#d32f2f",
                  margin: "10px",
                  borderRadius: "8px",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#b71c1c" },
                }}
              >
                <ListItemText primary="Logout" sx={{ textAlign: "center" }} />
              </ListItemButton>
            )}
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;

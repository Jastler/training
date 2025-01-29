import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { useEffect } from "react";

import TodoAppPage from "./pages/todo-app";
import { MainLayout } from "./features/layout";
import Home from "./pages/home";
import { useAppDispatch } from "./store";
import { subscribeToAuthChanges } from "./services/authService";
import { clearUser, setUser } from "./store/authSlice";
import useAuthListener from "./hooks/useAuthListener";
import theme from "./styles/theme";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import CounterPage from "./pages/counter";
import { LoginRegisterPage } from "./pages/login";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useAuthListener();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/todo-app" element={<TodoAppPage />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute redirectTo="/">
                  <LoginRegisterPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </Router>
  );
};

export default App;

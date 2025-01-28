import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CounterPage from "./pages/CounterPage";
import TodoAppPage from "./pages/TodoAppPage";

import { MainLayout } from "./componets/Layout/MainLayout";
import Home from "./pages/Home";

import { useEffect } from "react";
import { useAppDispatch } from "./store";
import { subscribeToAuthChanges } from "./services/authService";
import { clearUser, setUser } from "./store/authSlice";
import ProtectedRoute from "./componets/ProtectedRoute";
import LoginRegister from "./features/LoginRegister/LoginRegister";
import useAuthListener from "./hooks/useAuthListener";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

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
                  <LoginRegister />
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

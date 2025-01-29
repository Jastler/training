import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { lazy, Suspense, useCallback, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";

import useAuthListener from "@hooks/useAuthListener";
import { MainLayout } from "@features/layout";

import theme from "@styles/theme";
import { useAppDispatch } from "./store";
import { clearUser, setUser } from "@store/authSlice";
import { LoginResponse, subscribeToAuthChanges } from "@services/authService";
import SEO from "@components/SEO";
import ModalManager from "@components/modals/ModalManager";

const Home = lazy(() => import("@pages/home/"));
const CounterPage = lazy(() => import("@pages/counter"));
const TodoAppPage = lazy(() => import("@pages/todo-app"));

const App = () => {
  const dispatch = useAppDispatch();
  useAuthListener();

  const handleAuthChange = useCallback(
    (currentUser: LoginResponse | null) => {
      dispatch(currentUser ? setUser(currentUser) : clearUser());
    },
    [dispatch]
  );

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      if (!currentUser) {
        dispatch(clearUser());
      }
    });
    return unsubscribe;
  }, [handleAuthChange]);

  return (
    <HelmetProvider>
      <SEO />
      <ThemeProvider theme={theme}>
        <Router>
          <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route path="/todo-app" element={<TodoAppPage />} />
                <Route path="/login" />
              </Routes>
            </Suspense>
          </MainLayout>
        </Router>
      </ThemeProvider>
      <ModalManager />
    </HelmetProvider>
  );
};

export default App;

{
  /* <ProtectedRoute redirectTo="/">
</ProtectedRoute> */
}

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainLayout } from "./componets/Layout/MainLayout";
import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";
import TodoAppPage from "./pages/TodoAppPage";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo-app" element={<TodoAppPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;

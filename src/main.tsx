import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

// Глобальні стилі
import "./styles/base/global.scss";
import "./styles/utils/variables.scss";
import "./styles/utils/fonts.scss";

// Рендеримо додаток
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

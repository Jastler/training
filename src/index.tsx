import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

import "./styles/global.scss";
import "./styles/variables.scss";
import "./styles/fonts.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

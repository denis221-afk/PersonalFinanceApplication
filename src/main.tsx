import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store";
import "./index.css";
import App from "./App/App.tsx";
import { ContextLoading } from "./Hooks/useContextLoading";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextLoading>
      <Provider store={store}>
        <App />
      </Provider>
    </ContextLoading>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store";
import "./index.css";
import App from "./App/App.tsx";
import { ContextLoading } from "./Hooks/useContextLoading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClinet = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClinet}>
      <ContextLoading>
        <Provider store={store}>
          <App />
        </Provider>
      </ContextLoading>
    </QueryClientProvider>
  </StrictMode>,
);

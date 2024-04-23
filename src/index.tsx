import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "@/components/ErrorComponent";
import App from "./App"; // Replace with the path to your main React component

import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {process.env.mode && process.env.mode === "development" ? (
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <App />
      </ErrorBoundary>
    ) : (
      <App />
    )}
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../globalcss.css";
import SearchContextProvider from "./context/searchContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </BrowserRouter>
);

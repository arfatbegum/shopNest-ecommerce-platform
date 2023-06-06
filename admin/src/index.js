import React from "react";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);


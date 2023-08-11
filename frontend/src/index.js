import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { store } from "./redux/app/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);


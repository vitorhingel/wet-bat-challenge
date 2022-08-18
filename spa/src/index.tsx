import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/style/wetbat.theme";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App.routes";

import "./theme/style/styles.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

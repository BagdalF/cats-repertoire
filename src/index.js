import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { App } from "./App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

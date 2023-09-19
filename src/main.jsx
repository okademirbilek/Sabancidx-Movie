import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MovieProvider>
        <App />
      </MovieProvider>
     
    </Router>
  </React.StrictMode>
);

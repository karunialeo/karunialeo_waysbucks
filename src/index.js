import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { AlertProvider, LoginProvider, AdminProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AdminProvider>
        <LoginProvider>
          <AlertProvider>
            <Router>
              <App />
            </Router>
          </AlertProvider>
        </LoginProvider>
      </AdminProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

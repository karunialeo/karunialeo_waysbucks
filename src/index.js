import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { AlertProvider, LoginProvider, AdminProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import { OrderProvider } from './contexts/OrderContext';
import { ProfileProvider } from "./contexts/ProfileContext";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AdminProvider>
        <LoginProvider>
          <ProfileProvider>
            <AlertProvider>
              <OrderProvider>
                  <Router>
                    <App />
                  </Router>
              </OrderProvider>
            </AlertProvider>
          </ProfileProvider>
        </LoginProvider>
      </AdminProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

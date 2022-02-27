import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { AlertProvider, LoginProvider, AdminProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import { OrderProvider } from './contexts/OrderContext';
import { ProfileProvider } from "./contexts/ProfileContext";


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

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { AlertProvider, LoginProvider, AdminProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import { OrderProvider } from './contexts/OrderContext';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AdminProvider>
        <LoginProvider>
          <AlertProvider>
            <OrderProvider>
              <Router>
                <App />
              </Router>
            </OrderProvider>
          </AlertProvider>
        </LoginProvider>
      </AdminProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

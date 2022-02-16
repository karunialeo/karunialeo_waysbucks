import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import CustomerRoute from "./CustomerRoute";

import { LoginContext, AdminContext } from "../contexts/AuthContext";

// create component here
const AdminRoute = (props, { element: Component, ...rest }) => {
  const [login, setLogin] = useContext(LoginContext);
  const [admin, setAdmin] = useContext(AdminContext);
  return admin && login ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;

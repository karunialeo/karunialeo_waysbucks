// import necessary utility from rrd
import { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";

// create component here
const PrivateRoute = (props, { element: Component, ...rest }) => {
  const isLoggedin = props.isLogin;
  return isLoggedin ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;

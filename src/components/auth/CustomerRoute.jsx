// import necessary utility from rrd
import { Outlet, Navigate } from "react-router-dom";

// create component here
const CustomerRoute = (props, { element: Component, ...rest }) => {
  const isLoggedin = props.isLogin;
  return isLoggedin ? <Outlet /> : <Navigate to="/signin" />;
};

export default CustomerRoute;

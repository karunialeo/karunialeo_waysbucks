// import necessary utility from rrd
import { Outlet, Navigate } from "react-router-dom";
import CustomerRoute from "./CustomerRoute";

// create component here
const AdminRoute = (props, { element: Component, ...rest }) => {
  const isLoggedAdmin = props.isAdmin;
  const isLoggedIn = props.isLogin;
  return isLoggedAdmin && isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={<CustomerRoute isLogin={true} />} />
  );
};

export default AdminRoute;

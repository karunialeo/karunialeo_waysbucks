// import necessary utility from rrd
import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AlertContext, LoginContext } from "../../contexts/AuthContext";

// create component here
const CustomerRoute = ({ element: Component, ...rest }) => {
  const [alert, setAlert] = useContext(AlertContext);
  const [login, setLogin] = useContext(LoginContext);
  useEffect(() => {
    setAlert(!alert);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [<Navigate to="/" />]);
  return login ? <Outlet /> : <Navigate to="/" />;
};

export default CustomerRoute;

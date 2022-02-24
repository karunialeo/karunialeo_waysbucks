import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../config/api";
import { LoginContext } from "./AuthContext";
import { UserContext } from "./UserContext";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [state, dispatch] = useContext(UserContext);
  const [login, setLogin] = useContext(LoginContext);

  const getOrders = async () => {
    try {
      const response = await API.get(`/orders/${state.user.id}`);
      // Store order data to useState variabel
      setOrder(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [login]);

  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
};

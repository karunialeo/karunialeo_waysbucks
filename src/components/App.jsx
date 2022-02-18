import React, { useContext, useEffect } from "react";
import "../assets/styles/App.css";

import { API, setAuthToken } from "../config/api";

import { Routes, Route, useNavigate } from "react-router-dom";

import CustomerRoute from "./auth/CustomerRoute";
import AdminRoute from "./auth/AdminRoute";

import {
  RegisteredProvider,
  AdminContext,
  LoginContext,
} from "../contexts/AuthContext";
import {
  ModalProvider,
  TransactionModalProvider,
  CartModalProvider,
} from "../contexts/ModalContext";
import { UserContext } from "../contexts/UserContext";

import {
  LandingPage,
  ProductDesc,
  MyProfile,
  MyCart,
  AddProduct,
  AddTopping,
  TransactionsTable,
} from "../exports/exportPages";

import { Modal, Navbar } from "../exports/";

export const globalTitle = "Waysbucks Store | ";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [admin, setAdmin] = useContext(AdminContext);
  const [login, setLogin] = useContext(LoginContext);
  console.clear();
  console.log(state);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (!state.isLogin) {
      setLogin(false);
      navigate("/");
    } else {
      setLogin(true);
      if (state.user.status === "admin") {
        navigate("/");
        setAdmin(true);
      } else if (state.user.status === "customer") {
        navigate("/");
        setAdmin(false);
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <ModalProvider>
        <RegisteredProvider>
          <Navbar />
          <Modal />
        </RegisteredProvider>
      </ModalProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDesc />} />

        <Route exact path="/" element={<CustomerRoute />}>
          <Route
            path="/my-cart"
            element={
              <CartModalProvider>
                <MyCart />
              </CartModalProvider>
            }
          />
          <Route path="/profile" element={<MyProfile />} />
        </Route>

        <Route exact path="/" element={<AdminRoute />}>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-topping" element={<AddTopping />} />
          <Route
            path="/transactions"
            element={
              <TransactionModalProvider>
                <TransactionsTable />
              </TransactionModalProvider>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

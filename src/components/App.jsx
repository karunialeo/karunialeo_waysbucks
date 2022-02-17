import React, { useState } from "react";
import "../assets/styles/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CustomerRoute from "./auth/CustomerRoute";
import AdminRoute from "./auth/AdminRoute";

import {
  AdminProvider,
  AlertProvider,
  LoginProvider,
  RegisteredProvider,
} from "../contexts/AuthContext";

import {
  ModalProvider,
  TransactionModalProvider,
  CartModalProvider,
} from "../contexts/ModalContext";

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

export default function App() {
  return (
    <AdminProvider>
      <LoginProvider>
        <AlertProvider>
          <Router>
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
          </Router>
        </AlertProvider>
      </LoginProvider>
    </AdminProvider>
  );
}

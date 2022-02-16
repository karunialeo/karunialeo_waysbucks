import React, { useState } from "react";
import "../assets/styles/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CustomerRoute from "./auth/CustomerRoute";
import AdminRoute from "./auth/AdminRoute";

import {
  AdminProvider,
  LoginProvider,
  RegisteredProvider,
} from "./contexts/AuthContext";
import { ModalProvider } from "./contexts/ModalContext";

import {
  Modal,
  Navbar,
  Jumbotron,
  Menu,
  ProductDesc,
  MyCart,
  AddProduct,
  AddTopping,
  TransactionsTable,
  CustomerComponent,
} from "../exports/";

export const globalTitle = "Waysbucks Store | ";

export default function App() {
  return (
    <AdminProvider>
      <LoginProvider>
        <Router>
          <ModalProvider>
            <RegisteredProvider>
              <Navbar />
              <Modal />
            </RegisteredProvider>
          </ModalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Jumbotron />
                  <Menu />
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDesc />} />

            <Route exact path="/" element={<CustomerRoute />}>
              <Route path="/my-cart" element={<MyCart />} />
              <Route path="/profile" element={<CustomerComponent />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/add-topping" element={<AddTopping />} />
              <Route path="/transactions" element={<TransactionsTable />} />
            </Route>

            <Route exact path="/" element={<AdminRoute />}>
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/add-topping" element={<AddTopping />} />
              <Route path="/transactions" element={<TransactionsTable />} />
            </Route>
          </Routes>
        </Router>
      </LoginProvider>
    </AdminProvider>
  );
}

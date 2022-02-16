import React, { useState } from "react";
import "../assets/styles/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginProvider, RegisteredProvider } from "./contexts/AuthContext";
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
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-topping" element={<AddTopping />} />
          <Route path="/transactions" element={<TransactionsTable />} />
          <Route path="/profile" element={<CustomerComponent />} />
        </Routes>
      </Router>
    </LoginProvider>
  );
}

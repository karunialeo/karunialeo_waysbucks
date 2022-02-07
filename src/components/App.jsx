import React, { useState, useRef } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Router>
        <Navbar />
        <Modal state={openModal} setOpenModal={setOpenModal} />
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
    </>
  );
}

export default App;

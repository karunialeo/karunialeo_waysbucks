import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Menu from "./components/Menu";
import ProductDesc from "./components/ProductDesc";
import CustomerComponent from "./components/CustomerComponent";
import MyCart from "./components/MyCart";

import AddProduct from "./components/admin/AddProduct";
import AddTopping from "./components/admin/AddTopping";
import TransactionsTable from "./components/admin/TransactionsTable";

import AdminRoute from "./components/auth/AdminRoute";
import CustomerRoute from "./components/auth/CustomerRoute";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar
                  isLogin={isLogin}
                  isAdmin={isAdmin}
                  openLogin={false}
                  onClick={() => setIsLogin(!isLogin)}
                />
                <Jumbotron />
                <Menu />
              </>
            }
          />
          <Route
            exact
            path="/signin"
            element={
              <>
                <Navbar
                  isLogin={isLogin}
                  isAdmin={isAdmin}
                  openLogin={true}
                  onClick={() => setIsLogin(!isLogin)}
                />
                <Jumbotron />
                <Menu />
              </>
            }
          />
          <Route exact path="/" element={<CustomerRoute isLogin={isLogin} />}>
            <Route
              exact
              path="/product/:id"
              element={
                <>
                  <Navbar
                    isLogin={isLogin}
                    isAdmin={isAdmin}
                    openLogin={false}
                    onClick={() => setIsLogin(!isLogin)}
                  />
                  <ProductDesc />
                </>
              }
            />
            <Route
              exact
              path="/customer"
              element={
                <>
                  <Navbar
                    isLogin={isLogin}
                    isAdmin={isAdmin}
                    openLogin={false}
                    onClick={() => setIsLogin(!isLogin)}
                  />
                  <CustomerComponent />
                </>
              }
            />

            <Route
              exact
              path="/my-cart"
              element={
                <>
                  <Navbar
                    isLogin={isLogin}
                    isAdmin={isAdmin}
                    openLogin={false}
                    onClick={() => setIsLogin(!isLogin)}
                  />
                  <MyCart />
                </>
              }
            />
            <Route
              exact
              path="/add-product"
              element={
                <>
                  <Navbar
                    isLogin={isLogin}
                    isAdmin={isAdmin}
                    openLogin={false}
                    onClick={() => setIsLogin(!isLogin)}
                  />
                  <AddProduct isAdmin={isAdmin} />
                </>
              }
            />
            <Route
              exact
              path="/add-topping"
              element={
                <>
                  <Navbar
                    isLogin={isLogin}
                    isAdmin={isAdmin}
                    openLogin={false}
                    onClick={() => setIsLogin(!isLogin)}
                  />
                  <AddTopping isAdmin={isAdmin} />
                </>
              }
            />
          </Route>
          <Route
            path="/"
            element={<AdminRoute isAdmin={isAdmin} isLogin={isLogin} />}
          >
            <Route
              exact
              path="/add-product"
              element={
                <>
                  <Navbar
                    isLogin={isLogin}
                    isAdmin={isAdmin}
                    openLogin={false}
                    onClick={() => setIsLogin(!isLogin)}
                  />
                  <AddProduct isAdmin={isAdmin} />
                </>
              }
            />
            <Route
              exact
              path="/add-topping"
              element={
                <>
                  <Navbar
                    isLogin={isLogin}
                    isAdmin={isAdmin}
                    openLogin={false}
                    onClick={() => setIsLogin(!isLogin)}
                  />
                  <AddTopping isAdmin={isAdmin} />
                </>
              }
            />
            <Route
              exact
              path="/transactions"
              element={
                <>
                  <Navbar
                    isLogin={isLogin}
                    isAdmin={isAdmin}
                    openLogin={false}
                    onClick={() => setIsLogin(!isLogin)}
                  />
                  <TransactionsTable isAdmin={isAdmin} />
                </>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

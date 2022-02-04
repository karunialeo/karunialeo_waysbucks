import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Menu from "./components/Menu";
import ProductDesc from "./components/ProductDesc";
import CustomerComponent from "./components/CustomerComponent";
import MyCart from "./components/MyCart";
import AddProduct from "./components/admin/AddProduct";
import PrivateRoute from "./components/auth/PrivateRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
                  openLogin={false}
                  onClick={() => setIsLogin(!isLogin)}
                />
                <Jumbotron></Jumbotron>
                <Menu></Menu>
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
                  openLogin={true}
                  onClick={() => setIsLogin(!isLogin)}
                />
                <Jumbotron></Jumbotron>
                <Menu></Menu>
              </>
            }
          />
          <Route exact path="/" element={<PrivateRoute isLogin={isLogin} />}>
            <Route
              exact
              path="/product/:id"
              element={
                <>
                  <Navbar isLogin={isLogin} openLogin={false} />
                  <ProductDesc />
                </>
              }
            />
            <Route
              exact
              path="/customer"
              element={
                <>
                  <Navbar isLogin={isLogin} openLogin={false} />
                  <CustomerComponent />
                </>
              }
            />
            <Route
              exact
              path="/add-product"
              element={
                <>
                  <Navbar isLogin={isLogin} openLogin={false} />
                  <AddProduct />
                </>
              }
            />
            <Route
              exact
              path="/my-cart"
              element={
                <>
                  <Navbar isLogin={isLogin} openLogin={false} />
                  <MyCart />
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

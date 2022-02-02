import "./App.css";
import Navbar from "./components/Navbar";
import NavLoggedIn from "./components/NavLoggedIn";
import Jumbotron from "./components/Jumbotron";
import Menu from "./components/Menu";
import ProductDesc from "./components/ProductDesc";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loggedin" element={<LoggedIn />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <Menu></Menu>
    </>
  );
}

function LoggedIn() {
  return (
    <>
      <NavLoggedIn></NavLoggedIn>
      <Jumbotron></Jumbotron>
      <Menu></Menu>
    </>
  );
}

function Product() {
  return (
    <>
      <NavLoggedIn></NavLoggedIn>
      <ProductDesc></ProductDesc>
    </>
  );
}

export default App;

import "./App.css";
import React from "react";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Navbar from "./Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import store from "./Store/Store";
import { Provider } from "react-redux";
import { useState } from "react";
import { firebaseApp } from "./FirebaseAuth/Firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//import Route from './Context/Route';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import { Routes } from "react-router";
import FinalCart from "./Pages/FinalCart";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSignUp = () => {
    console.log("Submitted");
    const authentication = getAuth();

    createUserWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        console.log(response);

        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/products");
        window.location.href = "/products";
      }
    );
  };

  const handleSignIn = () => {
    console.log("Submitted");
    const authentication = getAuth();

    signInWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        console.log(response);
        console.log("sign in done");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/products");
        window.location.href = "/products";
      }
    );
  };
  return (
    <div className="container">
      <Navbar />
      <>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => {
                  handleSignIn();
                }}
              />
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <Signup
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleSignUp()}
              />
            }
          />

          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/product/:id"
            render={(props) => <Product {...props} />}
            element={<Product />}
          />
          <Route
            path="/FinalCart/:id"
            render={(props) => <FinalCart {...props} />}
            element={<FinalCart />}
          />
        </Routes>
      </>
    </div>
  );
}

function appProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default appProvider;

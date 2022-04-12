import React, { Component } from "react";
import ReactDOM from "react-dom";
import { app } from "../FirebaseAuth/Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login({ setEmail, setPassword, handleAction }) {
  return (
    <div>
      <h3 className="Login-title">Login Page</h3>
      <div className="Login row g-3 ">
        <form className="formEditor align-items-center border-success">
          <label className="form-label"> Email :</label>

          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />

          <label className="form-label">Password :</label>

          <br />

          <input
            type="Password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          <br />

          <div className="w-200 text-center">
            <input
              value="Log In"
              className="btn btn-success subButton m-auto vertical-center"
              onClick={handleAction}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

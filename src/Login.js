import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          img src='https://drscdn.500px.org/photo/1052120516/m%3D900/v2?sig=21b9620d80b14d211d8da25db5ea987c276d551ff48098c2c9c025b20560db16'
          alt='Final logo for capstone project by ZS Dorf on 500px.com'
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>

          <p>
            By signing-in you agree to the Buy 'n' Sell Conditions of Use and Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button onClick={register} className="login__registerButton">
            Create your Buy 'n' Sell Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

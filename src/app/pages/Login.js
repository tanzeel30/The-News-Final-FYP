import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Signup from "./Signup";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (username && password) {
      fetch("http://localhost:8092/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
    }
  };

  return (
    <div className="login">
      <div className="loginOverlay" />
      <div className="loginContainer">
        <p className="heading">Login</p>
        <p className="subHeading">Welcome back</p>
        <Input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <Button title="Login" onClick={loginHandler} />
      </div>
    </div>
  );
}

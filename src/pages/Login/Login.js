import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <h2 className="loginTitle">Please Login</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(email)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setEmail(password)}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;

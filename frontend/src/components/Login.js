import React, { useState, useEffect } from "react";
import axios from "axios";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);


  const login = () => {
    axios
      .post("http://localhost:3001/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (!response.data.message) {
          setLoginStatus(false);
        } else {
          setLoginStatus(true);
        }
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/api/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);


  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}> Login </button>
      <h1>{loginStatus}</h1>
    </div>
  );
}

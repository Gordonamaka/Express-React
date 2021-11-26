import React, { useState, useEffect } from "react";
import axios from "axios";


// Things to context: You need the auth, login status, logout. (Figure out if auth and login status are the same).

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Needs context or replace with auth/setAuth to show/replace login/register buttons(Tenary Operators)
  const [loginStatus, setLoginStatus] = useState(false);
  /* Also require onSubmit for the Register button
  const onSubmit = function (event) {
    event.preventDefault();
    email && props.login(email, password);
  }; */
  

  function handleLogin() {
    axios
      .post("http://localhost:3001/api/login", {
        email: email,
        password: password
      })
      .then((response) => {
        console.log("Login Response", response.data);
        if (!response.data.message) {
          setLoginStatus(false);
        } else {
          setLoginStatus(true);
        }
      });
  }

  // Waiting to implement Database/Server connection (Ali)
  //  useEffect(() => {
  //   axios.get("http://localhost:3001/api/login").then((response) => {
  //     if (response.data.loggedIn === true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //    });
  //  }, []);

  return (
    <div className="login">
      <h1>Login</h1>
      {/* HERE LIES THE LOGIN SUBMIT FORM */}
      <form>
        <p>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter Email"
          // (e) means event
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          />
        </p>
        <p>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
        </p>
        <h1>{loginStatus}</h1>
      </form>
        <button onClick={handleLogin}> Login </button>
    </div>
  );
}

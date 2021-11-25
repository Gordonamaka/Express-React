import React, { useState, useEffect } from "react";
import axios from "axios";

//Make a separate page?
export default function Registration(props) {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [first_name, setFirst_name] = useState("");

  const [last_name, setLast_name] = useState("");

  const [email, setEmail] = useState("");

  // ATTENTION: CAMEL CASE THE SCHEMA FOR FIRST_NAME, LAST_NAME
  // const onSubmit = function (event) {
  //   event.preventDefault();
  //   email && props.Register(email, username, first_Name, last_Name, password);
  // };

  // Yet to implement
  const register = () => {
    axios
      .post("http://localhost:3001/api/register", {
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="registration">
      <h1>Registration</h1>
      <form>
        <p>
          <label>Username</label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </p>
        <p>
          <label>First name</label>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => {
              setFirst_name(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Last name</label>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) => {
              setLast_name(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </p>
      </form>
      <button onClick={register}> Register </button>
    </div>
  );
}

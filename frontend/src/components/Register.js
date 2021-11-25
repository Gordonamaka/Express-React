import React, { useState, useEffect } from "react";
import axios from "axios";

//Make a separate page?
export default function Registration(props) {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [first_Name, setFirst_Name] = useState("");

  const [last_Name, setLast_Name] = useState("");

  const [email, setEmail] = useState("");

  axios.defaults.withCredentials = true;
  // ATTENTION: CAMEL CASE THE SCHEMA FOR FIRST_NAME, LAST_NAME
  const onSubmit = function (event) {
    event.preventDefault();
    email && props.Register(email, username, first_Name, last_Name, password);
  };

  // Yet to implement
  // const register = () => {
  //   axios
  //     .post("http://localhost:3001/api/register", {
  //       username: username,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };

  return (
    <div className="registration">
      <h1>Registration</h1>
      <form onSubmit={onSubmit}>
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
          value={first_Name}
          onChange={(e) => {
            setFirst_Name(e.target.value);
          }}
          />
        </p>
        <p>
        <label>Last name</label>
        <input
          type="text"
          name="last_name"
          value={last_Name}
          onChange={(e) => {
            setLast_Name(e.target.value);
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
          value="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
        </p>
        <button onClick={register}> Register </button>
      </form>
    </div>
  );
}

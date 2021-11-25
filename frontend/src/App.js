import "./App.css";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Component Routes
// import Home from "./components/Home";
// import About from "./components/About";
// import Register from "./components/Register";
// import Watchlist from "./components/Watchlist";
// import Hotlist from "./components/Hotlist";
// import Stockscreen from "./components/Stockscreen";
// import StockPredict from "./components/Stockpredict";
// import Users from "./components/Users";
import { Login } from "./components/Login";

function App() {
  
  //Logout setup (REMEMBER LOGIN AUTH IS ONLY FOR WHETHER THE USER IS LOGGED IN OR NOT; Logged in? show username + logout button : show Register button or form...)
  // const [auth, setAuth] = useState(false);
  // const [user, setUser] = useState(null);
  // const logout = function() {
  //   setAuth(false);
  //   setUser(null);
  // }
  
  return (
    <div className="App">
      <h1> Stock Screener/Predictor!</h1>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="about" element={<About />} />
        {/* <Route path="Register" element={<Reg />} /> */}
        <Route path="Login" exact render={(props) => <Login />} />
      </Routes>


      {/* Identifies whether user is logged in or not */}
      {/* {!auth && <Login login={login}/>} */}
      {/* {auth && <Logout logout={logout} user={user} />}   */}
    
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h1>Welcome to Upswing!</h1>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>We are tech entrepreneur's that aim to make understanding and viewing the stock market easy and accessible to everyone!</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}



export default App;

import "./App.css";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
// Component Routes
import Users from "./components/Users";
// import Home from "./components/Home";
import Login from "./components/login";
// import About from "./components/About";
import Watchlist from "./components/Watchlist";
import Register from "./components/Register";
import Hotlist from "./components/Hotlist";
import Stockscreen from "./components/Stockscreen";
import StockPredict from "./components/Stockpredict";
import MyForm from "./MyForm";

function App() {
  return (
    <div className="App">
      <h1> Stock Screener/Predictor!</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

   
      {/* <Register /> */}
      {/* <Login /> */}
    
      {/* <Stockscreen /> */}
      {/* <StockPredict /> */}
      
      <h2>How to Add Custom Validatin with Forms in React</h2>
      <MyForm />
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
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
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;

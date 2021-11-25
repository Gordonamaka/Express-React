import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            UPSWING
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Stockcreen">
                  Stocks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Watchlist">
                  Watchlist
                </NavLink>
              </li>

              {/* Add in fragment for the login status after connecting the login */}

              <li className="nav-item">
                <NavLink className="nav-link" to="/Profile">
                  Profile
                </NavLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
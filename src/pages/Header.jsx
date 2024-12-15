import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>

          <Link to="/login">Login</Link>
        </ul>
      </>
    </header>
  );
};

export default Header;

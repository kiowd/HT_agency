import React from "react";
import "./navbar.css";
import { MenuLists } from "./menuLists";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuLists = MenuLists.map(({ title, path }, index) => {
    return (
      <li key="index">
        <Link to="path">{title}</Link>
      </li>
    );
  });
  return (
    <nav>
      <div className="logo">
        &#8459;&#8465;<font>_Agency</font>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      <ul className="menu-lists">{menuLists}</ul>
    </nav>
  );
};

export default Navbar;

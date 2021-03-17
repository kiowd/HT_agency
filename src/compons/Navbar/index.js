import React, {useState} from "react";
import "./navbar.css";
import { MenuLists } from "./menuLists";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
const [clicked, setClicked] = useState(false);

const showMenu = () => setClicked(!clicked);

  const menuLists = MenuLists.map(({ title, path }, index) => {
    return (
      <li key="index">
        <Link to={path}>{title}</Link>
      </li>
    );
  });
  return (
    <nav>
      <div className="logo">
        &#8459;&#8465;<font>_Agency</font>
      </div>
      <div className="menu-icon" onClick={showMenu}>
      {clicked ? <FontAwesomeIcon icon={ faTimes } className='fa-times'/> : <FontAwesomeIcon icon={ faBars } className='fa-bars'/> }
      </div>
      <ul className={clicked ? "menu-lists" : "menu-lists close"} onClick={showMenu}>{menuLists}</ul>
    </nav>
  );
};

export default Navbar;

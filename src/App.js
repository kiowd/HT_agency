import "./styles.css";
import React, {useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import PreLoader from "./compons/PreLoader";

//library.add( faCheckSquare, faCoffee)

export default function App() {

  return (
    <div className="App">
      <p>Is it?</p>
      <FontAwesomeIcon icon={faCheckSquare} />
      <FontAwesomeIcon icon={faCoffee} />
      
    </div>
  );
}

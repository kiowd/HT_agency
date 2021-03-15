import "./styles.css";
import React, {useEffect} from 'react';
import PreLoader from "./compons/PreLoader";
import Navbar from "./compons/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//library.add( faCheckSquare, faCoffee)

export default function App() {

  return (
    <div className="App">
      <Router>      
      <Navbar/>
      {/* <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/work' component={Work}/>
      <Route path='/skills' component={Skills}/>
      </Switch> 
      */}
      </Router>
      
    </div>
  );
}

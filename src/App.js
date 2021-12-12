import './App.css';
import React from 'react';
import { Route, Routes, Navigate, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route exact path={"/home"} render={() => <Home /> }></Route>
            <Route exact path={"/about"} render={() => <About /> }></Route>
            <Route path="*" render={() => <Navigate  to={"/home"} />} />
          </Routes>
          </div>
      );
  }
}

export default App;
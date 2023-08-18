import React, { Component } from "react";
import { 
    Route,Routes,
    NavLink,
    HashRouter 
} from "react-router-dom";
import Contact from "./Contact";
import Reservations from "./Reservations";
import Menu from "./Menu";
import Home from "./Home";
 import "./index.css";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>La Rustica</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/reservations">Reservations</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

          </ul>
          <div className="content">
             <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/Menu" element={<Menu />}/>
                <Route path="/Reservations" element={<Reservations />}/>
                <Route path="/Contact" element={<Contact />}/>
             </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;
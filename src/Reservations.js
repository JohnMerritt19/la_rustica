import React, { Component } from "react";
import { 
  Route,Routes,
  NavLink,
  HashRouter 
} from "react-router-dom";
import ReservationForm from "./ReservationForm";
class Reservations extends Component {
  render() {
    return (
      <div>
        <h2>Reservations</h2>        
        <p>Click the link to set a reservation</p>
        <ReservationForm/>
      </div>
    );
  }
}
 
export default Reservations;
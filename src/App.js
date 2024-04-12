import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import AboutUs from "./pages/AboutUs";
import Help from "./pages/Help";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Bookingpage from "./pages/Bookingpage"; 

import Navbar from "./components/Navbar";
import { Switch, Route } from 'react-router-dom';
import Bookings from "./pages/Bookings";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/book" component={Bookingpage} /> {/* Add route to Bookingpage */}
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

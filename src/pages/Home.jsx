import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dh-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/landingpage">LandingPage</Link>
        </li>
        <li>
          <Link to="/youreinvited">YoureInvited</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/visualmenu">Visualmenu</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/Test">Test</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;

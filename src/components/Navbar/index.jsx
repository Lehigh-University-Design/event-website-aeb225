import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "components";
import "./index.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
     
      <div className="icon-home"> 
          <button onClick={() => navigate("/")}>La Piazza Sul Tetto</button> 
      </div>


      <div className="navbar-icons">
        <div className="icon-reservations"> 
          <button onClick={() => navigate("/reservations")}>Reservations</button> 
        </div>
        <div className="icon-menu"> 
          <button onClick={() => navigate("/menu")}>Menu</button>
        </div>
        <div className="icon-visualmenu"> 
          <button onClick={() => navigate("/visualmenu")}>Visual Menu</button>
        </div>
        <div className="icon-faqs"> 
          <button onClick={() => navigate("/faqs")}>FAQs</button>
        </div>
      </div>

      
    </div>
  );
};


export default Navbar;

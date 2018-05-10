import React from "react";
import ham from "../../static/ham.png";

export default () => (
  <nav>
    <img src={ham} className="ham" height="50" alt="hamburger icon" />
    <ul className="links-container">
      <li className="link">Home</li>
      <li className="link">Products</li>
      <li className="link">Promotions</li>
      <li className="link">About</li>
      <li className="link">Contact</li>
    </ul>
  </nav>
);

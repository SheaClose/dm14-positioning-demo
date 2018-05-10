import React from "react";
import ham from "../../static/ham.png";
import "./NavBar.css";

// const nav = {
//   height: "15vh",
//   display: "flex",
//   justifyContent: "space-between"
// };
const styles = {
  nav: {
    height: "15vh",
    display: "flex",
    justifyContent: "space-between"
  },
  img: {
    width: "40px"
  }
};

export default () => (
  <nav style={styles.nav}>
    <img style={styles.img} src={ham} className="ham" alt="hamburger icon" />
    <ul className="links-container">
      <li className="link">Home</li>
      <li className="link">Products</li>
      <li className="link">Promotions</li>
      <li className="link">About</li>
      <li className="link">Contact</li>
    </ul>
  </nav>
);

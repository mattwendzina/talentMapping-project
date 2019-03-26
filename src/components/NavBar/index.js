import React from "react";
import Styles from "./NavBar.module.css";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.headerCont} />
      </div>
    );
  }
}

export default NavBar;

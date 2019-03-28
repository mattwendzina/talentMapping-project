import React from "react";
import Styles from "./NavBar.module.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import RedLogo from "../redSantander.jpg";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.headerCont}>
          <div className={Styles.navLeft} />
          <TextField
            type="text"
            placeholder="Title / Date"
            className={Styles.textField}
            variant="standard"
          />

          <img
            src={RedLogo}
            alt="redSantander"
            style={{ width: "220px", height: "80px" }}
          />

          <div className={Styles.navRight}>
            <Button variant="contained" background-color="white" size="small">
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;

import React from "react";
import Styles from "./NavBar.module.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class NavBar extends React.Component {
  render() {
    return (
      <div className={Styles.headerCont}>
        <div className={Styles.navLeft}>
          <Button variant="contained" background-color="white">
            Back
          </Button>

          <TextField
            type="text"
            placeholder="Title / Date"
            className={Styles.textField}
            variant="standard"
          />
        </div>

        <div className={Styles.navRight}>
          <Button variant="contained" background-color="white">
            Logout
          </Button>
        </div>
      </div>
    );
  }
}

export default NavBar;

import React from "react";
import logo from "../santander.png";
import Button from "@material-ui/core/Button";
import Styles from "./Logo.module.css";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.left}>
          <img
            src={logo}
            alt="Santander"
            style={{ width: "240px", height: "90px" }}
          />

          <div className={Styles.right}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              type="submit"
            >
              Staff Intranet
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Logo;

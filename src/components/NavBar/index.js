import React from "react";
import Styles from "./NavBar.module.css";
//import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import RedLogo from "../redSantander.jpg";

class NavBar extends React.Component {
    render() {
        return (
            <div className={Styles.headerCont}>
                <div>
                    <h2 style={{ color: "white", marginLeft: "10px" }}>
                        Talent Grid
                    </h2>
                </div>

                <div className={Styles.navLeft}>
                    <img
                        src={RedLogo}
                        alt="RedLogo"
                        style={{ width: "220px", height: "80px" }}
                    />
                </div>

                <div className={Styles.navRight}>
                    <TextField
                        type="text"
                        placeholder={this.props.boardId}
                        className={Styles.textField}
                        variant="standard"
                    />

                    <Button
                        variant="contained"
                        background-color="white"
                        size="small"
                    >
                        Logout
                    </Button>
                </div>
            </div>
        );
    }
}

export default NavBar;

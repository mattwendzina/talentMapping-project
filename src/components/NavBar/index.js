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
                <div className={Styles.navLeft}>
                    <Button
                        variant="contained"
                        background-color="white"
                        size="small"
                    >
                        Back
                    </Button>

                    <TextField
                        type="text"
                        placeholder={this.props.boardId}
                        className={Styles.textField}
                        variant="standard"
                    />
                </div>

                <div className={Styles.navRight}>
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

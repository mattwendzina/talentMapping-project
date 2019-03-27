import React from "react";
import Styles from "./LogInContainer.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class LogInContainer extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onLogin}>
                <h3 className={Styles.users}>Welcome</h3>

                <TextField
                    onChange={this.props.onChange}
                    type="text"
                    fullWidth={true}
                    placeholder="email"
                    variant="standard"
                    name="email"
                    value={this.props.email}
                />
                <br />
                <br />
                <TextField
                    onChange={this.props.onChange}
                    type="text"
                    fullWidth={true}
                    placeholder="password"
                    variant="standard"
                    name="password"
                    value={this.props.password}
                />
                <br />
                <br />
                <input
                    variant="contained"
                    color="secondary"
                    size="small"
                    type="submit"
                    value="Log in"
                    fullWidth={true}
                />

                <br />
            </form>
        );
    }
}

export default LogInContainer;

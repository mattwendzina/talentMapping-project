import React from "react";
import Styles from "./LogInContainer.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class LogInContainer extends React.Component {
  render() {
    return (
      <div>
        <h3 className={Styles.users}>Welcome</h3>

        <TextField
          type="text"
          fullWidth={true}
          placeholder="Username"
          variant="standard"
        />
        <br />
        <br />
        <TextField
          type="text"
          fullWidth={true}
          placeholder="Password"
          variant="standard"
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
          fullWidth={true}
        >
          Log In
        </Button>

        <br />
      </div>
    );
  }
}

export default LogInContainer;

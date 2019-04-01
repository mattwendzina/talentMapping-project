import React from "react";
import Styles from "./LogInContainer.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
//import { withRouter } from "react-router";

const config = require("../../config");
class LogInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  };

  onLogin = event => {
    event.preventDefault();
    fetch(`${config.API_URI}/authenticate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(({ message, success, token }) => {
        if (success && token) {
          this.setState(state => ({
            email: "",
            password: ""
          }));
          this.props.onLogin(token);
        }
      })
      .catch(err => console.error(err));
    //.finally(() => this.setState(() => ({ isLoading: false })));
  };
  render() {
    return (
      <form className={Styles.form} onSubmit={this.onLogin}>
        <h3 className={Styles.users}>Welcome</h3>
        <h4 className={Styles.headline}>Digital Talent Manager</h4>
        <TextField
          onChange={this.onChange}
          type="text"
          fullWidth={true}
          placeholder="email"
          variant="standard"
          name="email"
          value={this.state.email}
        />
        <br />
        <br />
        <TextField
          onChange={this.onChange}
          type="text"
          fullWidth={true}
          placeholder="password"
          variant="standard"
          name="password"
          value={this.state.password}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
          value="Log in"
          fullWidth={true}
        >
          Log in
        </Button>
        <br />
      </form>
    );
  }
}

export default LogInContainer;

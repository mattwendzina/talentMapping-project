import React from "react";
import Styles from "./UserList.module.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class UserList extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.userCont}>
          <h3 className={Styles.users}>Session Users</h3>
          <TextField type="text" placeholder="Add User" variant="standard" />
          <Button
            variant="contained"
            color="secondary"
            className={Styles.button}
            type="submit"
          >
            +
          </Button>
          <br />
        </div>
      </div>
    );
  }
}

export default UserList;

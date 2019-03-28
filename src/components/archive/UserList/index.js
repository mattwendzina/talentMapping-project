import React from "react";
import Styles from "./UserList.module.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Users from "../Users";
import UserSearch from "../UserSearch";

class UserList extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.userCont}>
          <h3>Session Users</h3>
          <TextField
            type="text"
            placeholder="Add User"
            variant="standard"
            onChange={this.props.userInput}
          />

          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={Styles.button}
            type="submit"
          >
            +
          </Button>

          {this.props.inputValue && (
            <ul className={Styles.userSearchList}>
              {this.props.sessionUsers.map(item => (
                <UserSearch
                  className={Styles.userSearchLi}
                  sessionUsers={item}
                  addUser={this.props.addUser}
                />
              ))}
            </ul>
          )}

          {this.props.activeSessionUsers && (
            <ul className={Styles.userSetList}>
              {this.props.activeSessionUsers.map(item => (
                <Users className={Styles.userLi} activeSessionUsers={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default UserList;

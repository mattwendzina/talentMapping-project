import React from "react";
import Styles from "./UserList.module.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Users from "../Users";
import UserSearch from "../UserSearch";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

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
              {this.props.users.map(item => (
                <UserSearch
                  className={Styles.userSearchLi}
                  users={item}
                  addUser={this.props.addUser}
                />
              ))}
            </ul>
          )}

          {this.props.users && (
            <ul className={Styles.userSetList}>
              {this.props.user2.map(item => (
                <Users className={Styles.userLi} users={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default UserList;

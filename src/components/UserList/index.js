import React from "react";
// import Styles from "./StaffList.module.css";
//import ReactDOM from "react-dom";
//import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Users from "../Users";
import UserSearch from "../UserSearch";
import Droppable from "../DnD/Droppable";
import Styles from "./UserList.module.css";

class UserList extends React.Component {
  render() {
    return (
      <div className={Styles.users}>
        <Droppable panelists={this.props.matchPanelits}>
          <div className={Styles.users2}>
            <h3>{this.props.title}</h3>
            <TextField
              type="text"
              placeholder="Seach Employee"
              variant="standard"
              onChange={this.props.TextFieldInput}
            />

            {this.props.inputValue && (
              <ul className="searchList">
                {this.props.matchUser.map((item, index) => (
                  <UserSearch
                    key={index}
                    staffUser={item}
                    addUser={this.props.addUser}
                    matchUser={item}
                    title={this.props.title}
                  />
                ))}
              </ul>
            )}

            {this.props.activeUsers && (
              <ul className="setList">
                {this.props.activeUsers.map((item, index) => {
                  if (item.position === 0) {
                    return (
                      <Users
                        key={index}
                        title={this.props.title}
                        activeUsers={item}
                      />
                    );
                  }
                })}
              </ul>
            )}
          </div>
        </Droppable>
      </div>
    );
  }
}

export default UserList;

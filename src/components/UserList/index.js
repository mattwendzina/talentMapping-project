import React from "react";
// import Styles from "./StaffList.module.css";
//import ReactDOM from "react-dom";
//import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Users from "../Users";
import UserSearch from "../UserSearch";
import Droppable from "../DnD/Droppable";

class UserList extends React.Component {
  render() {
    return (
      <div>
        <Droppable panelists={this.props.matchPanelits}>
          <div>
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
                  />
                ))}
              </ul>
            )}

            {this.props.activeStaffUsers && (
              <ul className="setList">
                {this.props.activeStaffUsers.map((item, index) => {
                  if (item.position === 0) {
                    return <Users key={index} activeStaffUsers={item} />;
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

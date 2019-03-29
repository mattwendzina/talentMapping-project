import React from "react";
import Styles from "./StaffList.module.css";
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
        <Droppable>
          <div className={Styles.panelistColumn}>
            <h3 className={Styles.users}>{this.props.title}</h3>
            <TextField
              className={Styles.placeholder}
              type="text"
              placeholder="Seach Employee"
              variant="standard"
              onChange={this.props.staffInput}
            />

            {this.props.inputValue && (
              <ul className={Styles.staffSearchList}>
                {this.props.staffUsers.map((item, index) => (
                  <UserSearch
                    key={index}
                    className={Styles.staffSearchLi}
                    staffUser={item}
                    addStaffUser={this.props.addStaffUser}
                  />
                ))}
              </ul>
            )}

            {this.props.activeStaffUsers && (
              <ul className={Styles.staffSetList}>
                {this.props.activeStaffUsers.map((item, index) => {
                  if (item.position === 0) {
                    return (
                      <Users
                        key={index}
                        className={Styles.userLi}
                        activeStaffUsers={item}
                      />
                    );
                  }
                })}
              </ul>
            )}
            {/* {this.props.activeStaffUsers && (
              <ul className={Styles.staffSetList}>
                {this.props.activeStaffUsers.map((item, index) => {
                  if (item.position === 0) {
                    return (
                      <Users
                        key={index}
                        className={Styles.userLi}
                        activeStaffUsers={item}
                      />
                    );
                  }
                })}
              </ul>
            )} */}
          </div>
        </Droppable>
      </div>
    );
  }
}

export default UserList;

import React from "react";
import Styles from "./StaffList.module.css";
//import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Staff from "../Staff";
import Droppable from "../DnD/Droppable";

class StaffList extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.staffCont}>
          <h3 className={Styles.users}>Talent Bank</h3>
          <TextField
            className={Styles.placeholder}
            type="text"
            placeholder="Seach Employee"
            variant="standard"
          />
          <ul className={Styles.staff}>
            {this.props.users.map((user, index) => {
              return (
                <Droppable>
                  <Staff
                    key={index}
                    userId={user.id}
                    userName={`${user.firstName} ${user.lastName}`}
                  />
                </Droppable>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default StaffList;

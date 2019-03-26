import React from "react";
import Styles from "./UserList.module.css";

class UserList extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.userCont}>User List</div>
      </div>
    );
  }
}

export default UserList;

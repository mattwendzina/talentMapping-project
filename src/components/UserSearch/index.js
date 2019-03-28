import React from "react";
import Styles from "./Users.module.css";

class UserSearch extends React.Component {
  render() {
    // const { image, name, price, desc, status } = this.props.details;
    return (
      <li className={Styles.userSearchLi} onClick={this.props.addUser}>
        {this.props.users.userName}
      </li>
    );
  }
}

export default UserSearch;

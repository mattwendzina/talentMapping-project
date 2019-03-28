import React from "react";
import Styles from "./Users.module.css";

class Users extends React.Component {
  render() {
    // const { image, name, price, desc, status } = this.props.details;
    return <li className={Styles.userLi}>{this.props.users.user}</li>;
  }
}

export default Users;

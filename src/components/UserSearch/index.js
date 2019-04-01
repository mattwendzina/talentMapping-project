import React from "react";
import Styles from "./staffSearch.module.css";
// import Styles from "./Users.module.css";

class UserSearch extends React.Component {
  render() {
    return (
      <li
        key={new Date()}
        className={Styles.userSearchLi}
        onClick={this.props.addUser}
        data-userid={this.props.staffUser._id}
      >
        {this.props.matchUser.firstName}
      </li>
    );
  }
}

export default UserSearch;

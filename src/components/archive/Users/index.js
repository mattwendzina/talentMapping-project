import React from "react";
import Styles from "./Users.module.css";

class Users extends React.Component {
    render() {
        //console.log("active session users", this.props.activeSessionUsers);
        // const { image, name, price, desc, status } = this.props.details;
        return (
            <li className={Styles.userLi}>
                {this.props.activeSessionUsers.user}
            </li>
        );
    }
}

export default Users;

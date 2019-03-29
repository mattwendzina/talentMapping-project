import React from "react";
import Styles from "./Users.module.css";

class UserSearch extends React.Component {
    render() {
        //console.log(this.props.addUser);
        // const { image, name, price, desc, status } = this.props.details;
        return (
            <li className={Styles.userSearchLi} onClick={this.props.addUser}>
                {this.props.sessionUsers.userName}
            </li>
        );
    }
}

export default UserSearch;

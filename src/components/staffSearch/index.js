import React from "react";
import Styles from "./staffSearch.module.css";
// import Styles from "./Users.module.css";

class StaffSearch extends React.Component {
    render() {
        return (
            <li
                className={Styles.userSearchLi}
                onClick={this.props.addStaffUser}
                data-userid={this.props.staffUser._id}
            >
                {this.props.staffUser.firstName}
            </li>
        );
    }
}

export default StaffSearch;

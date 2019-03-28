import React from "react";

class Users extends React.Component {
    render() {
        return (
            <li className="users" id={this.props.userId}>
                {this.props.userName}
            </li>
        );
    }
}

export default Users;

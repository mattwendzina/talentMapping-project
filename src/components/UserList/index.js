import React from "react";
import Styles from "./UserList.module.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Users from "../Users";

class UserList extends React.Component {
    render() {
        return (
            <div>
                <div className={Styles.userCont}>
                    <h3 className={Styles.usersList}>Session Users</h3>
                    <TextField
                        type="text"
                        placeholder="Add User"
                        variant="standard"
                    />
                    {/* <Button
            variant="contained"
            color="secondary"
            size="small"
            className={Styles.button}
            type="submit"
          >
            +
          </Button> */}

                    <ul className={Styles.users}>
                        {this.props.users.map((user, index) => {
                            return (
                                <Users
                                    key={index}
                                    userId={user.id}
                                    userName={`${user.firstName} ${
                                        user.lastName
                                    }`}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserList;

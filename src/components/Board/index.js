import React from "react";
// import css from "./RRBoard.module.css"
import { Redirect } from "react-router-dom";

import NavBar from "../NavBar/index";
import ClockTimer from "../Clock";
import Grid from "../Grid/index";
import Users from "../UserList/";

import Styles from "./board.module.css";
// import UserList from "../UserList/index";
// import ProgressBar from "../ProgressBar";

// import DnDTest from "../DnD/DnDTest";
// import sampleUsers from "../../sampleUsers.js";
// import sampleStaffUsers from "../../sampleStaffUsers.js";

const config = require("../../config");

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardId: "",
            updatedAt: "",
            panelists: [],
            matchPanelists: [],
            activePanelists: [],
            staffUsers: [],
            matchStaffUsers: [],
            activeStaffUsers: [],
            panelistsValue: "",
            staffValue: ""
        };
    }

    componentDidMount() {
        fetch(
            `${config.API_URI}/boards?token=${localStorage.getItem("token")}`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        )
            .then(res => res.json())
            //.then(data => console.log(data));
            .then(data =>
                this.setState(state => ({
                    boardId: data.payload.boardId,
                    updatedAt: data.payload.updatedAt
                }))
            );
        fetch(`${config.API_URI}/users?token=${localStorage.getItem("token")}`)
            .then(res => res.json())
            .then(users =>
                this.setState(
                    () => ({
                        panelists: users.payload,
                        staffUsers: users.payload
                    }),
                    function() {
                        // console.log(this.state.panelists);
                    }
                )
            );
    }

    /*------------------------
  Session Users
  -------------------------*/
    userInput = event => {
        const { value } = event.target;
        this.setState(
            () => ({
                panelistsValue: value
            }),
            this.displayUserMatches
        );
    };

    displayUserMatches = () => {
        const matchesArray = this.findMatches(
            this.state.panelistsValue,
            this.state.panelists
        );
        this.setState(() => ({
            matchPanelists: matchesArray
        }));
    };

    addUser = e => {
        console.log(e);
        const userId = e.target.attributes[1].value;
        const innerText = e.target.innerText;

        this.setState(() => ({
            activePanelists: [
                ...this.state.activePanelists,
                { user: innerText, userId, position: 0 }
            ],
            panelistsValue: ""
        }));
    };

    /*------------------------
    Staff Users
-------------------------*/
    staffInput = event => {
        //console.log(event);
        const { value } = event.target;
        this.setState(
            () => ({
                staffValue: value
            }),
            this.displayStaffMatches
        );
    };

    findMatches = (wordToMatch, staff) => {
        return staff.filter(user => {
            //  console.log(user);
            const regex = new RegExp(wordToMatch, "gi");
            return user.firstName.match(regex);
        });
    };

    displayStaffMatches = () => {
        const matchesArray = this.findMatches(
            this.state.staffValue,
            this.state.staffUsers
        );
        // console.log(matchesArray);
        this.setState(
            () => ({
                matchStaffUsers: matchesArray
            }),
            function() {
                // console.log(this.state.staffUsers);
            }
        );
    };

    addStaffUser = e => {
        const userId = e.target.attributes[1].value;
        const innerText = e.target.innerText;

        this.setState(() => ({
            activeStaffUsers: [
                ...this.state.activeStaffUsers,
                { user: innerText, userId, position: 0 }
            ],
            staffValue: ""
        }));

        fetch(
            `${config.API_URI}/boards/${
                this.state.boardId
            }?token=${localStorage.getItem("token")}`,
            {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: userId,
                    position: 0,
                    comments: ""
                })
            }
        )
            .then(res => res.json())
            .then(data =>
                this.setState(state => ({
                    updatedAt: data.payload.updatedAt
                }))
            );
    };

    handleDrop = (userId, position) => {
        const userIndex = this.state.activeStaffUsers.findIndex(function(user) {
            return user.userId === userId;
        });
        if (userIndex < 0) {
            return;
        }
        this.setState(state => ({
            activeStaffUsers: [
                ...state.activeStaffUsers.slice(0, userIndex),
                {
                    ...state.activeStaffUsers[userIndex],
                    position: position
                },
                ...state.activeStaffUsers.slice(userIndex + 1)
            ]
        }));
        fetch(
            `${config.API_URI}/boards/${
                this.state.boardId
            }?token=${localStorage.getItem("token")}`,
            {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: userId,
                    position: position,
                    comments: ""
                })
            }
        )
            .then(res => res.json())
            .then(data =>
                this.setState(state => ({
                    updatedAt: data.payload.updatedAt
                }))
            );
    };

    render() {
        return (
            <div>
                {!this.props.isLoggedIn ? (
                    <Redirect to="/login" />
                ) : (
                    <div className="App">
                        <NavBar
                            boardId={`${
                                this.state.boardId
                            } - ${this.state.updatedAt.substring(16, 11)}`}
                        />
                        <div className="container">
                            <div className="listCont">
                                <div className={Styles.row1}>
                                    <Users
                                        title="Panelist"
                                        staffInput={this.userInput}
                                        inputValue={this.state.panelistsValue}
                                        addStaffUser={this.addUser}
                                        staffUsers={this.state.panelists}
                                        activeStaffUsers={
                                            this.state.activePanelists
                                        }
                                    />
                                    {/* <ClockTimer /> */}
                                </div>
                                <div className={Styles.row2}>
                                    <Users
                                        title="Staff List"
                                        staffInput={this.staffInput}
                                        inputValue={this.state.staffValue}
                                        addStaffUser={this.addStaffUser}
                                        staffUsers={this.state.staffUsers}
                                        activeStaffUsers={
                                            this.state.activeStaffUsers
                                        }
                                    />
                                </div>
                            </div>

                            <div className="gridCont">
                                <div className="Grid">
                                    <Grid
                                        handleDrop={this.handleDrop}
                                        users={this.state.activeStaffUsers}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Board;

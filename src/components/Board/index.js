import React from "react";
// import css from "./RRBoard.module.css"
import { Redirect } from "react-router-dom";

import NavBar from "../NavBar/index";
import Clock from "../Clock/index";
import Grid from "../Grid/index";
import StaffList from "../StaffList/index";
import UserList from "../UserList/index";
import DnDTest from "../DnD/DnDTest";

const config = require("../../config");

class RRBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardId: ""
        };
    }

    componentDidMount() {
        //const token = localStorage.getItem("token");
        const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTM3MTM4NTMsImRhdGEiOnsiZW1haWwiOiJqb25ueUBsZXN0ZXIuY28udWsiLCJmaXJzdE5hbWUiOiJKb25ueSIsImxhc3ROYW1lIjoiTGVzdGVyIn0sImlhdCI6MTU1MzcwMzA1M30.qlbIwxCBMxcVDjsFK1A7K3Q-4MT5nnhZHh3sol-FstQ";
        fetch(`${config.API_URI}/boards?token=${token}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            //.then(data => console.log(data));
            .then(data =>
                this.setState(state => ({
                    boardId: data.payload.boardId
                }))
            );
    }

    render() {
        return (
            <div>
                {!this.props.isLoggedIn ? (
                    <Redirect to="/login" />
                ) : (
                    <div className="App">
                        <NavBar />
                        <div className="container">
                            <div className="listCont">
                                <div>
                                    <UserList />
                                    <Clock />
                                </div>
                                <div>
                                    <StaffList />
                                </div>
                            </div>
                            <div className="gridCont">
                                <div className="Grid">
                                    <Grid />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default RRBoard;

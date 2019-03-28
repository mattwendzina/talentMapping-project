import React from "react";
// import css from "./RRBoard.module.css"
import { Redirect } from "react-router-dom";

import NavBar from "../NavBar/index";
import Clock from "../Clock/index";
import Grid from "../Grid/index";
import StaffList from "../StaffList/index";
import UserList from "../UserList/index";
import ProgressBar from "../ProgressBar";

//import DnDTest from "../DnD/DnDTest";

const config = require("../../config");

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: "",
      users: [
        {
          user: "7654redxcvgyu789olmnbvfr",
          firstName: "Jonny",
          lastName: "Lester",
          position: 0
        },
        {
          user: "plkjhgfder45678ir",
          firstName: "Rhys",
          lastName: "Handley",
          position: 0
        },
        {
          user: "0987654esxcvbhjk",
          firstName: "Sahela",
          lastName: "Rani",
          position: 0
        },
        {
          user: "5rfvbgtyujmr",
          firstName: "Matt",
          lastName: "Wendzina",
          position: 0
        }
      ]
      // users:[{user: objectID, position: 4}]
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
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
            <NavBar boardId={this.state.boardId} />
            <ProgressBar />
            <div className="container">
              <div className="listCont">
                <div>
                  <UserList users={this.state.users} />
                  <Clock />
                </div>

                <div>
                  <StaffList users={this.state.users} />
                </div>
              </div>
              <div className="gridCont">
                <div className="Grid">
                  <Grid boardId={this.state.boardId} />
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

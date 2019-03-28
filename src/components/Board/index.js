import React from "react";
// import css from "./RRBoard.module.css"
import { Redirect } from "react-router-dom";

import NavBar from "../NavBar/index";
import Clock from "../Clock/index";
import Grid from "../Grid/index";
import StaffList from "../StaffList/index";
import UserList from "../UserList/index";
import DnDTest from "../DnD/DnDTest";
import sampleUsers from "../../sampleUsers.js";

const config = require("../../config");

class RRBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: "",
      users: [],
      value: "",
      users2: []
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

  userInput = event => {
    const { value } = event.target;
    this.setState(
      () => ({
        value: value
      }),
      this.displayMatches
    );
  };

  findMatches = (wordToMatch, user) => {
    return user.filter(user => {
      const regex = new RegExp(wordToMatch, "gi");
      console.log(regex);
      return user.userName.match(regex);
    });
  };

  displayMatches = () => {
    const matchesArray = this.findMatches(this.state.value, sampleUsers);
    console.log(matchesArray);
    this.setState(() => ({
      users: matchesArray
    }));
  };

  addUser = e => {
    console.log(innerText);
    const innerText = e.target.innerText;
    this.setState(
      () => ({
        users2: [...this.state.users2, { user: innerText }],
        value: ""
      }),
      function() {
        console.log(this.state.users);
      }
    );
  };

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
                  <UserList
                    users={this.state.users}
                    userInput={this.userInput}
                    inputValue={this.state.value}
                    addUser={this.addUser}
                    user2={this.state.users2}
                  />
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

import React from "react";
// import css from "./RRBoard.module.css"
import { Redirect } from "react-router-dom";

import NavBar from "../NavBar/index";
import Clock from "../Clock/index";
import Grid from "../Grid/index";
import StaffList from "../StaffList/index";
import UserList from "../UserList/index";

import DnDTest from "../DnD/DnDTest";
// import sampleUsers from "../../sampleUsers.js";
// import sampleStaffUsers from "../../sampleStaffUsers.js";

const config = require("../../config");

const token = localStorage.getItem("token");
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: "",
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
    fetch(`${config.API_URI}/users?token=${token}`)
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

  findMatches = (wordToMatch, user) => {
    return user.filter(user => {
      const regex = new RegExp(wordToMatch, "gi");
      // console.log(regex);
      return user.firstName.match(regex);
    });
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
    const userId = e.target.attributes[1].value;
    const innerText = e.target.innerText;

    this.setState(() => ({
      activePanelists: [
        ...this.state.activePanelists,
        { user: innerText, userId }
      ],
      panelistsValue: ""
    }));
  };

  /*------------------------
    Staff Users
-------------------------*/
  staffInput = event => {
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
      console.log(user);
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
        { user: innerText, userId }
      ],
      staffValue: ""
    }));

    fetch(`${config.API_URI}/boards/${this.state.boardId}?token=${token}`, {
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
    })
      .then(res => res.json())
      //.then(data => console.log(data));
      .then(data => console.log(data));
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
                  <StaffList
                    className="Style.panelist"
                    title="Panelist"
                    staffInput={this.userInput}
                    inputValue={this.state.panelistsValue}
                    addStaffUser={this.addUser}
                    staffUsers={this.state.panelists}
                    activeStaffUsers={this.state.activePanelists}
                  />
                  <Clock />
                </div>
                <div>
                  <StaffList
                    className="Style.staffList"
                    title="Staff List"
                    staffInput={this.staffInput}
                    inputValue={this.state.staffValue}
                    addStaffUser={this.addStaffUser}
                    staffUsers={this.state.staffUsers}
                    activeStaffUsers={this.state.activeStaffUsers}
                  />
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

export default Board;

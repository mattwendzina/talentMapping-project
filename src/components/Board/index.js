import React from "react";
// import css from "./RRBoard.module.css"
import { Redirect } from "react-router-dom";

import NavBar from "../NavBar/index";
import ClockTimer from "../Clock";
import Grid from "../Grid/index";
import UserList from "../UserList/";

import Styles from "./board.module.css";
// import UserList from "../UserList/index";
// import ProgressBar from "../ProgressBar";

// import DnDTest from "../DnD/DnDTest";
// import sampleUsers from "../../sampleUsers.js";
// import sampleStaffUsers from "../../sampleStaffUsers.js";

const config = require("../../config");
const token = localStorage.getItem("token");

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
    fetch(`${config.API_URI}/boards?token=${localStorage.getItem("token")}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data =>
        this.setState(state => ({
          boardId: data.payload.boardId,
          updatedAt: data.payload.updatedAt
        }))
      );
    fetch(`${config.API_URI}/users?token=${localStorage.getItem("token")}`)
      .then(res => res.json())
      .then(users =>
        this.setState(() => ({
          panelists: users.payload,
          staffUsers: users.payload
        }))
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
      this.displayPanelistMatches
    );
  };

  findPanelistMatches = (wordToMatch, panelist) => {
    return panelist.filter(user => {
      const regex = new RegExp(wordToMatch, "gi");
      return user.firstName.match(regex);
    });
  };

  displayPanelistMatches = () => {
    const matchesArray = this.findPanelistMatches(
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
        { user: innerText, userId, position: 0 }
      ],
      panelistsValue: ""
    }));
  };

  /*------------------------
    Staff Users
-------------------------*/
  StaffInput = event => {
    const { value } = event.target;
    this.setState(
      () => ({
        staffValue: value
      }),
      this.displayStaffMatches
    );
  };

  findStaffMatches = (wordToMatch, staff) => {
    return staff.filter(user => {
      const regex = new RegExp(wordToMatch, "gi");
      return user.firstName.match(regex);
    });
  };

  displayStaffMatches = () => {
    const matchesArray = this.findStaffMatches(
      this.state.staffValue,
      this.state.staffUsers
    );
    this.setState(() => ({
      matchStaffUsers: matchesArray
    }));
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
    const token = localStorage.getItem("token");
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
                  <UserList
                    title="Panelist"
                    TextFieldInput={this.userInput}
                    matchUser={this.state.matchPanelists}
                    inputValue={this.state.panelistsValue}
                    addUser={this.addUser}
                    staffUsers={this.state.panelists}
                    activeUsers={this.state.activePanelists}
                  />
                  <ClockTimer />
                </div>
                <div className={Styles.row2}>
                  <UserList
                    title="Staff List"
                    TextFieldInput={this.StaffInput}
                    matchUser={this.state.matchStaffUsers}
                    inputValue={this.state.staffValue}
                    addUser={this.addStaffUser}
                    staffUsers={this.state.staffUsers}
                    activeUsers={this.state.activeStaffUsers}
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

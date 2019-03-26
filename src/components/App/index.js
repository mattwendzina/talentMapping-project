import React from "react";
import NavBar from "../NavBar/index";
import Clock from "../Clock/index";
import Grid from "../Grid/index";
import StaffList from "../StaffList/index";
import UserList from "../UserList/index";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="mainCont">
          <div>
            <UserList />
            <Clock />
          </div>
          <div>
            <StaffList />
          </div>
          <div>
            <Grid />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

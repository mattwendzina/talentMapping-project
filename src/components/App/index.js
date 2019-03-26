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
        This is the App Page test
        <NavBar />
        <Clock />
        <StaffList />
        <UserList />
        <Grid />
      </div>
    );
  }
}

export default App;

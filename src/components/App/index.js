import React from "react";
import NavBar from "../NavBar/index";
import Clock from "../Clock/index";
import Grid from "../Grid/index";
import StaffList from "../StaffList/index";
import UserList from "../UserList/index";
import LogInHeader from "../LogInHeader";
import LogInContainer from "../LogInContainer";
import Logo from "../Logo";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
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
        <br />
        <br />
        <div>
          <div>
            <LogInHeader />
          </div>
          <div>
            <Logo />
          </div>
          <div className="logInCont">
            <LogInContainer />
          </div>
          <div>
            <h6>WTP © 2019</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import NavBar from "../NavBar/index";
import Clock from "../Clock/index";
import Grid from "../Grid/index";
import StaffList from "../StaffList/index";
import UserList from "../UserList/index";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  render() {
    return (
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
        {/* <AppWrapper>
          <Container>
            <DnDTest />
          </Container>
        </AppWrapper> */}
      </div>
    );
  }
}

export default App;

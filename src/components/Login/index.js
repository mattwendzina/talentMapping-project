import React from "react";
//import css from "./RRLogin.module.css";

import LogInHeader from "../LogInHeader";
import LogInContainer from "../LogInContainer";
import Logo from "../Logo";
import { LinearProgress } from "@material-ui/core";

const RRLogin = props => {
  return (
    <div>
      <div>
        <LogInHeader />
        <LinearProgress />
      </div>
      <br />
      <div>
        <Logo />
      </div>
      <div className="logInCont">
        <LogInContainer
          onLogin={props.onLogin}
          onChange={props.onChange}
          email={props.email}
          password={props.password}
        />
      </div>
      <div>
        <h6>WTP © 2019</h6>
      </div>
    </div>
  );
};

export default RRLogin;

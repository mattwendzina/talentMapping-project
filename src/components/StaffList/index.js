import React from "react";
import Styles from "./StaffList.module.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Staff from "../Staff";

class StaffList extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.staffCont}>
          <h3 className={Styles.users}>Talent Bank</h3>
          <TextField
            className={Styles.placeholder}
            type="text"
            placeholder="Seach Employee"
            variant="standard"
          />
          <Button
            variant="contained"
            className={Styles.button}
            type="submit"
            color="secondary"
            size="small"
          >
            +
          </Button>
          <ul className={Styles.staff}>
            <Staff />
          </ul>
        </div>
      </div>
    );
  }
}

export default StaffList;

import React from "react";
import Styles from "./staff.module.css";

import Draggable from "../DnD/Draggable";
import Droppable from "../DnD/Droppable";

class Staff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      talent: []
    };
  }

  render() {
    return (
      <>
        <Draggable id={"item1"}>
          <li className={Styles.staffLi}>{this.props.activeStaffUsers.user}</li>
        </Draggable>
      </>
    );
  }
}

export default Staff;

import React from "react";

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
        <Droppable id="item1">
          <Draggable id="item1">
            <span className="staff">Test Name</span>
          </Draggable>
        </Droppable>
        <Droppable id="item2">
          <Draggable id="item2">
            <span className="staff">Test Name2</span>
          </Draggable>
        </Droppable>
      </>
    );
  }
}

export default Staff;

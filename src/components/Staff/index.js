import React from "react";

import Draggable from "../DnD/Draggable";
import Droppable from "../DnD/Droppable";

class Staff extends React.Component {
  render() {
    return (
      <>
        <Droppable id="item1">
          <Draggable id="item1">
            <span className="staff">Test Name</span>
          </Draggable>
        </Droppable>
        <Droppable>
          <Draggable id="item2">
            <span className="staff">Test Name2</span>
          </Draggable>
        </Droppable>
      </>
    );
  }
}

export default Staff;

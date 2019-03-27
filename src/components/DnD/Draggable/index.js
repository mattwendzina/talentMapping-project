import React from "react";
import propTypes from "prop-types";

class Draggable extends React.Component {
  drag = event => {
    event.dataTransfer.setData("moving", event.target.id);
  };

  notAllowDrop = event => {
    event.stopPropogation();
  };
  render() {
    return (
      <div
        id={this.props.id}
        draggable="true"
        onDragStart={this.drag}
        onDragOver={this.notAllowDrop}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

Draggable.propTypes = {
  id: propTypes.string,
  style: propTypes.object,
  children: propTypes.node
};

export default Draggable;

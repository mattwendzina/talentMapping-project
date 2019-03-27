import React from "react";
import propTypes from "prop-types";

class Droppable extends React.Component {
  drop = event => {
    event.preventDefault();
    const data = event.dataTransfer.getData("moving");
    event.target.appendChild(document.getElementById(data));
  };

  allowDrop = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div id={this.props.id} onDrop={this.drop}>
        {" "}
        onDragover={this.allowDrop} style={this.props.style}
        {this.props.children}
      </div>
    );
  }
}

Droppable.propTypes = {
  id: propTypes.string,
  style: propTypes.object,
  children: propTypes.node
};

export default Droppable;

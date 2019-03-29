import React from "react";
import propTypes from "prop-types";
//const config = require("../../../config");
class Droppable extends React.Component {
    drop = event => {
        event.preventDefault();
        event.dataTransfer.getData("moving", event.target.id);
        //console.log(event.dataTransfer.getData("moving", event.target));
    };

    allowDrop = event => {
        event.preventDefault();
    };
    render() {
        return (
            <div
                id={this.props.id}
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                style={this.props.style}
            >
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

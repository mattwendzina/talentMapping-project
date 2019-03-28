import React from "react";
import propTypes from "prop-types";
const config = require("../../../config");
class Droppable extends React.Component {
    drop = event => {
        event.preventDefault();
        //const data = event.dataTransfer.getData("moving");
        //event.target.appendChild(document.getElementById(data));
        //console.log(data);
        //console.log(`${event.target.attributes[0].value}`);
        //event.dataTransfer.getData("moving", event.target.id);
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

import React from "react";
import propTypes from "prop-types";
const config = require("../../../config");
class Droppable extends React.Component {
    drop = event => {
        event.preventDefault();
        const data = event.dataTransfer.getData("moving");
        event.target.appendChild(document.getElementById(data));
        console.log({
            boardId: this.props.boardId,
            position: event.target.attributes[0].value
        });

        // fetch(`${config.API_URI}/boards/${this.props.boardId}`, {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json"
        //     }
        //     body: JSON.stringify({
        //         user: `${userId}`,
        //         position: event.target.attributes[0].value,
        //         comments: ""
        //     })
        // }).then(res => res.json());
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

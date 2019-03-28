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
                <Draggable id={this.props.userId}>
                    <li className="staff">{this.props.userName}</li>
                </Draggable>
            </>
        );
    }
}

export default Staff;

import React from "react";
import Styles from "./staff.module.css";

import Draggable from "../DnD/Draggable";

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
                <Draggable userid={this.props.activeStaffUsers.userId}>
                    <li className={Styles.staffLi}>
                        {this.props.activeStaffUsers.user}
                    </li>
                </Draggable>
            </>
        );
    }
}

export default Staff;

import React from "react";
import styles from "./Grid.module.css";
import Draggable from "../DnD/Draggable";
import Droppable from "../DnD/Droppable";

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                [
                    { id: "3", desc: "Exceptional Team Talent" },
                    { id: "6", desc: "Exceptional Functional Talent" },
                    { id: "9", desc: "Exceptional Organisational Talent" }
                ],
                [
                    { id: "2", desc: "Strong Team Talent" },
                    { id: "5", desc: "Strong Functional Talent" },
                    { id: "8", desc: "Strong Organisational Talent" }
                ],
                [
                    { id: "1", desc: "Team Talent" },
                    { id: "4", desc: "Functional Talent " },
                    { id: "7", desc: "Organisational Talent" }
                ]
            ]
        };
    }

    render() {
        return (
            <div className={styles.Grid}>
                <Droppable boardId={this.props.boardId}>
                    <div className={styles.gridCont}>
                        {this.state.board.map((row, index) => (
                            <div key={index} className={styles.gridRow}>
                                {row.map(cell => (
                                    <span
                                        key={cell.id}
                                        position={cell.id}
                                        className={styles.cell}
                                        staff={this.props.staff}
                                        onDrop={event =>
                                            this.props.handleDrop(
                                                event.dataTransfer.getData(
                                                    "moving"
                                                ),
                                                event.target.attributes[0].value
                                            )
                                        }
                                    >
                                        {cell.desc}
                                        {this.props.users.map((user, index) => {
                                            if (user.position === cell.id) {
                                                return (
                                                    <Draggable>
                                                        <li
                                                            key={user.id}
                                                            className="staff"
                                                        >{`${user.firstName} ${
                                                            user.lastName
                                                        }`}</li>
                                                    </Draggable>
                                                );
                                            }
                                        })}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </Droppable>
            </div>
        );
    }
}
export default Grid;

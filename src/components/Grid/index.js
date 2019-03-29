import React from "react";
import styles from "./Grid.module.css";
//import Draggable from "../DnD/Draggable";
import Droppable from "../DnD/Droppable";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    //const board = new Array(numRows).fill(new Array(numCols).fill(boardfill));

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
        <div className={styles.gridCont}>
          <Droppable boardId={this.props.boardId}>
            {this.state.board.map((row, index) => (
              <div key={index} className={styles.gridRow}>
                {row.map(cell => (
                  <span
                    key={cell.id}
                    position={cell.id}
                    className={styles.cell}
                  >
                    {cell.desc}
                  </span>
                ))}
              </div>
            ))}
          </Droppable>
        </div>
      </div>
    );
  }
}
export default Grid;

import React from "react";
import styles from "./Grid.module.css";
import Draggable from "../DnD/Draggable";
import Droppable from "../DnD/Droppable";

const numRows = 3;
const numCols = 3;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    const board = new Array(numRows).fill(
      new Array(numCols).fill(["go", "Home", "Roger"])
    );

    this.state = {
      board
    };
  }

  render() {
    return (
      <Droppable>
        <div className={styles.Grid}>
          <div className={styles.gridCont}>
            {this.state.board.map(row => (
              <div className={styles.gridRow}>
                {row.map(cell => (
                  <span className={styles.cell} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Droppable>
    );
  }
}
export default Grid;

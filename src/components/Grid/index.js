import React from "react";
import styles from "./Grid.module.css";
import Draggable from "../DnD/Draggable";
import Droppable from "../DnD/Droppable";

const numRows = 3;
const numCols = 3;
const boardfill = [["3", "6", "9"], ["2", "5", "8"], ["1", "4", "7"]];

class Grid extends React.Component {
  constructor(props) {
    super(props);
    const board = new Array(numRows).fill(new Array(numCols).fill(boardfill));

    this.state = {
      board
    };
  }

  render() {
    return (
      <div className={styles.Grid}>
        <div className={styles.gridCont}>
          <Droppable id="1">
            {this.state.board.map(row => (
              <div className={styles.gridRow}>
                {row.map(cell => (
                  <span className={styles.cell}>{cell}</span>
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

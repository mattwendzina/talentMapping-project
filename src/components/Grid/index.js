import React from "react";
import styles from "./Grid.module.css";

const numRows = 3;
const numCols = 3;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    const board = new Array(numRows).fill(new Array(numCols).fill(0));

    this.state = {
      board
    };
  }

  render() {
    return (
      <div>
        <div className={styles.gridCont}>
          {this.state.board.map(row => (
            <div className={styles.gridRow}>
              {row.map(cell => (
                <span className={styles.cell}>{cell === 0}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Grid;

import { Cell } from "./Cell";
import { Colors } from "./Colors";

export class Board {
    cells: Cell[][] = [];

    public initCells() {
        for (let i = 0; i < 8; i++) {
            this.cells[i] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    this.cells[i][j] = new Cell(this, j, i, Colors.WHITRE, null);
                } else {
                    this.cells[i][j] = new Cell(this, i, j, Colors.BLACK, null);
                }
            }
        }
    }
}
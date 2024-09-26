import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }

    isEmpty(): boolean {
        return !this.figure;
    }

    isEnemy(target: Cell): boolean {
        return this.figure === null;
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x)
            return false;

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);

        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCell(this.x, y).isEmpty())
                return false;
        }
        return true;
    }

    isEmptyHorizontal(target: Cell): boolean {
        if (this.y !== target.y)
            return false;

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);

        for (let x = min + 1; x < max; x++) {
            if (!this.board.getCell(x, this.y).isEmpty())
                return false;
        }
        return true;
    }

    isEmptyDiagonal(target: Cell): boolean {
        const xDiff = Math.abs(this.x - target.x);
        const yDiff = Math.abs(this.y - target.y);

        if (xDiff !== yDiff)
            return false;

        const xStep = this.x < target.x ? 1 : -1;
        const yStep = this.y < target.y ? 1 : -1;

        for (let i = 1; i < xDiff; i++) {
            if (!this.board.getCell(this.x + i * xStep, this.y + i * yStep).isEmpty())
                return false;
        }
        return true;
    }

    setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.cell = this;
    }
    moveFigure(targetCell: Cell) {
        if (this.figure?.canMove(targetCell)) {
            this.figure.moveFigure(targetCell);
            targetCell.setFigure(this.figure);
            this.figure = null;
        }
    }
}
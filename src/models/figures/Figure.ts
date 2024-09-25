import { Colors } from "../Colors";
import logo from '../../assets/black-king.png';
import { Cell } from "../Cell";

export enum FigureNames {
    Figure = 'Figure',
    King = 'King',
    Queen = 'Queen',
    Rook = 'Rook',
    Bishop = 'Bishop',
    Knight = 'Knight',
    Pawn = 'Pawn'
}
export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.Figure;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        return true;
    }

    moveFigure(target: Cell): void {

    }
}
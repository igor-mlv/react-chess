import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-knight.png';
import whiteLogo from '../../assets/white-knight.png';

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.Knight;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const xDiff = Math.abs(this.cell.x - target.x);
        const yDiff = Math.abs(this.cell.y - target.y);
        return (xDiff === 2 && yDiff === 1) || (xDiff === 1 && yDiff === 2);
    }
}
import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
    cell: Cell;
    selected: boolean;
    handleCellClick: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, handleCellClick }) => {
    return (
        <div
            className={["cell", cell.color, selected && "selected"].join(" ")}
            onClick={() => handleCellClick(cell)}
        >
            {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
        </div>
    )
}

export default CellComponent
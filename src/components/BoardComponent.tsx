import React, { FC, useEffect } from 'react'
import { Board } from '../models/Board';
import CellComponent from './CellComponent';
import { Cell } from '../models/Cell';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}
const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
    const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null);

    function handleCellClick(cell: Cell) {
        if (selectedCell
            && selectedCell !== cell
            && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        } else {
            setSelectedCell(cell);
        }
    }

    useEffect(() => {
        hightlightAvailableCells();
    }, [selectedCell])

    function hightlightAvailableCells() {
        board.hightlightAvailableCells(selectedCell)
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }
    return (
        <div className="board">
            {board.cells.map((row, index) => (
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            key={cell.id}
                            cell={cell}
                            selected={selectedCell === cell}
                            handleCellClick={handleCellClick}
                        />
                    )}
                </React.Fragment>

            ))}
        </div>
    )
}

export default BoardComponent
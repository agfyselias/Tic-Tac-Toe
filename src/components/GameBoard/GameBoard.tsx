import classes from './GameBoard.module.scss';

function GameBoard(props: {
  gameBoard: string[][],
  onSquareClick: (rowIndex: number, colIndex: number) => void,
}) {
  return (
    <ol className={classes['game-board']}>
      {props.gameBoard.map((row: string[], rowIndex: number) =>
        <li key={`game-board-row-${rowIndex}`}>
          <ol>
            {row.map((playerSymbol: string, colIndex: number) => 
              <li key={`game-board-row-${rowIndex}-column-${colIndex}`}>
                <button
                  type="button"
                  className={classes['game-board__square']}
                  disabled={playerSymbol.length > 0}
                  onClick={() => props.onSquareClick(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            )}
          </ol>
        </li>
      )}
    </ol>
  );
}

export default GameBoard;

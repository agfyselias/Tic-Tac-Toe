import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Players from "./components/Players/Players";
import Log from "./components/Log/Log";
import type { IPlayer, ITurn } from "./utilities/interfaces/interfaces";
import { WINNING_COMBINATIONS } from "./utilities/mocks/winning-combinations-mock";
import { DEFAULT_GAMEBOARD } from "./utilities/mocks/default-gameboard-mock";
import GameOver from "./components/GameOver/GameOver";
import { DEFAULT_PLAYERS } from "./utilities/mocks/default-players-mock";
import styles from './App.module.scss';

// Helper functions
function deriveActivePlayer(gameTurns: ITurn[]): 'X' | 'O' {
  return gameTurns.length % 2 === 0 ? 'X' : 'O';
}

function populateGameBoard(gameTurns: ITurn[]): string[][] {
  const gameBoard: string[][] = [...DEFAULT_GAMEBOARD.map((row) => {
    return [...row];
  })];

  for (const turn of gameTurns) {
    const { row, column } = turn.square;
    gameBoard[row][column] = turn.symbol;
  }

  return gameBoard;
}

function determineWinnerSymbol(gameBoard: string[][]): string {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
  
    const winner = firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol;

    if (winner) {
      return firstSquareSymbol;
    }
  }

  return '';
}

function determineWinner(winnerSymbol: string, players: IPlayer[]): string {
  if (!winnerSymbol) {
    return '';
  }
  if (winnerSymbol === 'X') {
    return players[0].name;
  }
  return players[1].name;
}

function determineDraw(winner: string, gameTurns: ITurn[]): boolean {
  return !winner && gameTurns.length === 9;
}

function App() {
  const [players, setPlayers] = useState([...DEFAULT_PLAYERS]);
  const [gameTurns, setGameTurns] = useState([] as ITurn[]);

  const activePlayerSymbol = deriveActivePlayer(gameTurns);
  const gameBoard: string[][] = populateGameBoard(gameTurns);
  const winnerSymbol: string = determineWinnerSymbol(gameBoard);
  const winner: string = determineWinner(winnerSymbol, players);
  const draw: boolean = determineDraw(winner, gameTurns);

  function handleSquareClick(rowIndex: number, colIndex: number): void {
    setGameTurns((prevTurns: ITurn[]): ITurn[] => {
      const curPlayerSymbol = deriveActivePlayer(prevTurns);
      const newTurn: ITurn = {
        symbol: curPlayerSymbol,
        square: { 
          row: rowIndex,
          column: colIndex,
        }
      }
      const updatedTurns = [newTurn, ...prevTurns];
      return updatedTurns;
    });
  }

  function handleRematchClick(): void {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerIndex: number, newName: string): void {
    const updatedPlayers: IPlayer[] = [...players];
    updatedPlayers[playerIndex].name = newName; 
    setPlayers(updatedPlayers);
  }

  return (
    <main>
      <div className={styles['game-container']}>
        <Players
          players={players}
          activePlayerSymbol={activePlayerSymbol}
          onSavePlayerName={handlePlayerNameChange}
        />
        {(winner || draw) && <GameOver winner={winner} onRematchClick={handleRematchClick} />}
        <GameBoard
          gameBoard={gameBoard}
          onSquareClick={handleSquareClick}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App;

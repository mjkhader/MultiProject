import { WINNING_COMBINATIONS } from "../data/winning-combination";
import GameBoard from "../gameBoard/GameBoard";
import GameOver from "../gameover/GameOver";
import Header from "../header/header";
import Player from "../player/Player";
import { useState } from "react";
import Log from "../Log/Log";
import "./TicTacToe.css";

// from the gameboard component
const iniialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivdeActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function TikTakToe() {
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  })
  const [gameTurns, setGameTurns] = useState([]);

  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = derivdeActivePlayer(gameTurns);

  //add this from gameBoard component
  let gameBoard = [...iniialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const comination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[comination[0].row][comination[0].column];
    const secondSquareSymbol =
      gameBoard[comination[1].row][comination[1].column];
    const thirdSquareSymbol =
      gameBoard[comination[2].row][comination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquere(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      const currentPlayer = derivdeActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol,newName){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,
        [symbol]:newName
      }
    })
  }

  return (
    <div className="containerMain">
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquere} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </div>
  );
}

export default TikTakToe;

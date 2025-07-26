
export default function GameOver({winner ,onRestart}) {
  return (
    <div id="game-over">
        <h2>Game Over!</h2>
        <p>{winner && <p>{winner} Won!</p> } </p>
        <p>{!winner && <p>it's a draw!</p> } </p>
        <div>
            <button onClick={onRestart}>Rematch!</button>
        </div>
    </div>
  )
}

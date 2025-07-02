function GameOver(props: {
  winner: string,
  onRematchClick: () => void,
}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {props.winner && <p><span id="winner">{props.winner}</span> won!</p>}
      {!props.winner && <p>It's a draw!</p>}
      <p>
        <button
          type="button"
          onClick={props.onRematchClick}
        >
          Rematch
        </button>
      </p>
    </div>
  )
}

export default GameOver;

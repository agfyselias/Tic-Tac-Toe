import classes from './GameOver.module.scss';

function GameOver(props: {
  winner: string,
  onRematchClick: () => void,
}) {
  return (
    <div className={classes['game-over']}>
      <h2 className={classes['game-over__title']}>Game Over!</h2>
      {props.winner && <p className={classes['game-over__result']}><span className={classes['game-over__winner']}>{props.winner}</span> won!</p>}
      {!props.winner && <p className={classes['game-over__result']}>It's a draw!</p>}
      <button
        type="button"
        className={classes['game-over__rematch-button']}
        onClick={props.onRematchClick}
      >
        Rematch
      </button>
    </div>
  )
}

export default GameOver;

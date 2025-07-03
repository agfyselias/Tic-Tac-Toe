import styles from './GameOver.module.scss';

function GameOver(props: {
  winner: string,
  onRematchClick: () => void,
}) {
  return (
    <div className={styles['game-over']}>
      <h2>Game Over!</h2>
      {props.winner && <p><span className={styles.winner}>{props.winner}</span> won!</p>}
      {!props.winner && <p>It's a draw!</p>}
      <p>
        <button
          type="button"
          className={styles['game-over__rematch-button']}
          onClick={props.onRematchClick}
        >
          Rematch
        </button>
      </p>
    </div>
  )
}

export default GameOver;

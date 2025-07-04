import type { ITurn } from "../../utilities/interfaces/interfaces";
import styles from './Log.module.scss';

function Log(props: { gameTurns: ITurn[]}) {
  return (
    <ol className={styles.log}>
      {props.gameTurns.map((turn: ITurn) =>
        <li
          key={`game-turn-${turn.symbol}-square-${turn.square.row}-${turn.square.column}`}
          className={styles['log__game-turn']}
        >
          {turn.symbol} selected - [{turn.square.row}, {turn.square.column}]
        </li>
      )}
    </ol>
  );
}

export default Log;

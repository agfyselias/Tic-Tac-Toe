import type { ITurn } from "../../interfaces/Turn.interface";
import classes from './Log.module.scss';

function Log(props: { gameTurns: ITurn[]}) {
  return (
    <ol className={classes['log']}>
      {props.gameTurns.map((turn: ITurn) =>
        <li
          key={`game-turn-${turn.symbol}-square-${turn.square.row}-${turn.square.column}`}
          className={classes['log__game-turn']}
        >
          {turn.symbol} selected - [{turn.square.row}, {turn.square.column}]
        </li>
      )}
    </ol>
  );
}

export default Log;

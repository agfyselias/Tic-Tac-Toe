import type { ITurn } from "../../utilities/interfaces/interfaces";

function Log(props: { gameTurns: ITurn[]}) {
  return (
    <ol id="log">
      {props.gameTurns.map((turn: ITurn) =>
        <li key={`game-turn-${turn.symbol}-square-${turn.square.row}-${turn.square.column}`}>
          {turn.symbol} selected - [{turn.square.row}, {turn.square.column}]
        </li>
      )}
    </ol>
  );
}

export default Log;
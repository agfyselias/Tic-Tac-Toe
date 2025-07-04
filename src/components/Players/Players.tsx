import Player from "./Player.tsx/Player";
import type { IPlayer } from "../../utilities/interfaces/interfaces";
import styles from './Players.module.scss';

function Players(props: {
  players: IPlayer[],
  activePlayerSymbol: string,
  onSavePlayerName: (playerIndex: number, newName: string) => void,
}) {
  return (
    <ol className={`${styles.players} ${styles['highlight-player']}`}>
      {props.players.map((player: IPlayer, index: number) =>
        <Player
          key={`player-${player.name}-${index}`}
          isActive={props.activePlayerSymbol === player.symbol}
          defaultPlayer={player}
          onSavePlayerName={(newName: string) => props.onSavePlayerName(index, newName)}
        />
      )}
    </ol>
  );
}

export default Players;

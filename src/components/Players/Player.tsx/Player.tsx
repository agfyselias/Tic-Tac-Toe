import { useState } from "react";
import type { IPlayer } from "../../../utilities/interfaces/interfaces";
import styles from './Player.module.scss';

function Player(props: {
  defaultPlayer: IPlayer,
  isActive: boolean,
  onSavePlayerName: (newName: string) => void,
}) {
  const [player, setPlayer] = useState(props.defaultPlayer);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(): void {
    setIsEditing((editing: boolean): boolean => {
      return !editing;
    });
    if (isEditing) {
      return props.onSavePlayerName(player.name);
    }
  }

  function handlePlayerNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setPlayer({
      ...props.defaultPlayer,
      name: event.target.value
    });
  }

  return (
    <li className={`${styles.player} ${props.isActive ? styles['player--active'] : ''}`}>
      <span className={styles.player}>
        {!isEditing
          ? <span className={`${styles['player__name']} ${props.isActive ? styles['player__name--active'] : ''}`}>
              {player.name}
            </span>
          : <input
              required
              type="text"
              placeholder="Player name"
              className={styles['player__name-input']}
              value={player.name}
              onChange={handlePlayerNameChange}
            />
        }
        <span className={`${styles['player__symbol']} ${props.isActive ? styles['player__symbol--active'] : ''}`}>{player.symbol}</span>
      </span>
      <button
        type="button"
        className={styles['player__button']}
        onClick={handleEditClick}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}

export default Player;

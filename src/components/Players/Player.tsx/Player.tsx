import { useState } from "react";
import type { IPlayer } from "../../../utilities/interfaces/Player.interface";
import classes from './Player.module.scss';

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
    <li className={`${classes['player']} ${props.isActive ? classes['player--active'] : ''}`}>
      <span className={classes['player']}>
        {!isEditing
          ? <span className={`${classes['player__name']} ${props.isActive ? classes['player__name--active'] : ''}`}>
              {player.name}
            </span>
          : <input
              required
              type="text"
              placeholder="Player name"
              className={classes['player__name-input']}
              value={player.name}
              onChange={handlePlayerNameChange}
            />
        }
        <span className={`${classes['player__symbol']} ${props.isActive ? classes['player__symbol--active'] : ''}`}>{player.symbol}</span>
      </span>
      <button
        type="button"
        className={classes['player__button']}
        onClick={handleEditClick}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}

export default Player;

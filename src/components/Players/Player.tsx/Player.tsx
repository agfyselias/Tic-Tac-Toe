import { useState } from "react";
import type { IPlayer } from "../../../utilities/interfaces/interfaces";

function Player(props: {
  defaultPlayer: IPlayer,
  isActive: boolean,
  onSavePlayerName: (newName: string) => void,
}) {
  const [player, setPlayer] = useState(props.defaultPlayer);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(): void {
    if (isEditing) {
      return props.onSavePlayerName(player.name);
    }
    setIsEditing((editing: boolean): boolean => {
      return !editing;
    });
  }

  function handlePlayerNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setPlayer({
      ...props.defaultPlayer,
      name: event.target.value
    });
  }

  return (
    <li className={props.isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing
          ? <span className="player-name">{player.name}</span>
          : <input
              required
              type="text"
              value={player.name}
              placeholder="Player name"
              onChange={handlePlayerNameChange}
            />
        }
        <span className="player-symbol">{player.symbol}</span>
      </span>
      <button
        type="button"
        onClick={handleEditClick}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}

export default Player;
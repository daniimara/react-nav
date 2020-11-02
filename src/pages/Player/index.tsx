import React, { FC } from "react";
import { Link } from "react-router-dom";
import useParams from "../../hooks/useParams";
import PlayerAPI from "../../mockData/playerMock";
import { Player } from "../../types";

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
interface PlayerProps {
  player?: Player;
}

export const PlayerInfo: FC<PlayerProps> = ({ player }) => {
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }

  return (
    <div>
      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>Position: {player.position}</h2>
      <Link to="/roster">Back</Link>
    </div>
  );
};

export default () => {
  const params = useParams({
    id: ""
  });
  console.log("params.number: ", params.id);
  const player = PlayerAPI.get(Number(params.id));

  return <PlayerInfo player={player} />;
};

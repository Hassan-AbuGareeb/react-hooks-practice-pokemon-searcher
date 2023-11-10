import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemonInfo }) {
  const {
    name,
    hp,
    sprites: { front, back },
  } = pokemonInfo;

  const [showFrontPic, setShowFrontPic] = useState(true);

  return (
    <Card>
      <div>
        <div className="image" onClick={() => setShowFrontPic(!showFrontPic)}>
          <img src={showFrontPic ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

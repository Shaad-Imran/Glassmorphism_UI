import React from "react";
import { cardData } from "../data";

const Games = () => {
  return (
    <div className="games">
      <div className="status">
        <h1>Active Games</h1>
        <input type="text" />
      </div>
      <div className="cards">
        {cardData.map((game, index) => (
          <div key={index} className="card">
            <img src={game.image} alt={game.title} />
            <div className="card-info">
              <h2>{game.title}</h2>
              <p>{game.platform}</p>
              <div className="progress"></div>
            </div>
            <h2 className="percentage">{game.percentage}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;

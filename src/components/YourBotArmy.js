import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {

  const mapBots = bots.map(bot => (
    <div key={bot.id} className="col-md">
      <BotCard 
        bot={bot}
        clickEvent={removeBot}
        deleteBot={deleteBot}
      />
    </div>
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {mapBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;



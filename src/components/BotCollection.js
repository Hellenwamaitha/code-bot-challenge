import React from "react";
import BotCard from "./BotCard";
import YourBotArmy from './YourBotArmy';

function BotCollection({ bots, enlistBot, deleteBot }) {

  const mapBots = bots.map(bot => (
    <div key={bot.id} className="col-md">
      <BotCard 
        bot={bot}
        clickEvent={enlistBot}
        deleteBot={deleteBot}
      />
    </div>
  ));

  return (
    <div className="container bot-army">
      {/* Display YourBotArmy */}
      <div className="row your-bot-army-row">
        <YourBotArmy bots={bots} removeBot={enlistBot} deleteBot={deleteBot} />
      </div>
      
      {/* Display all bots (mapBots) */}
      <div className="row">
        {mapBots}
      </div>
      
      <div className="row">
        <div className="col-12 text-center">
          Collection of all bots
        </div>
      </div>
    </div>
  );
}

export default BotCollection;


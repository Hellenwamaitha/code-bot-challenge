import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, enlistBot, deleteBot}) {
  // Your code here

  const mapBots = bots.map(bot => 
    <BotCard 
    key={bot.id}
    bot={bot}
    clickEvent={enlistBot}
    deleteBot={deleteBot}
    />)

    return (
      <div className="container bot-army">
        <div className="row">
          {mapBots.map((bot, index) => (
            <div key={index} className="col-md-3 bot-column">
              {bot}
            </div>
          ))}
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

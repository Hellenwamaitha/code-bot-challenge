import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "https://raw.githubusercontent.com/Hellenwamaitha/bot-api/main/users%20bot";

function BotsPage() {

  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setBots(data.bots);  // You should set the 'bots' key from the data
            setLoading(false);
        })
        .catch(error => {
            console.error('There was an error fetching the data:', error);
            setLoading(false);
            setError(error.message);
        });
}, []);


  const enlistBot = bot => {
    setBots(prevBots => 
      prevBots.map(b => b.id === bot.id ? {...b, army: true} : b)
    );
  }

  const removeBot = bot => {
    setBots(prevBots => 
      prevBots.map(b => b.id === bot.id ? {...b, army: false} : b)
    );
  }

  const deleteBot = bot => {
    setBots(prevBots => 
      prevBots.filter(b => b.id !== bot.id)
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const botArmyProps = {
    bots: bots.filter(b => b.army),
    removeBot,
    deleteBot
  };

  const botCollectionProps = {
    bots,
    enlistBot,
    deleteBot
  };

  return (
    <div>
      <YourBotArmy {...botArmyProps} />
      <BotCollection {...botCollectionProps} />
    </div>
  );
}

export default BotsPage;

import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import SortBar from "./SortBar";

const API = "https://raw.githubusercontent.com/Hellenwamaitha/bot-api/main/users%20bot";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortingCriteria, setSortingCriteria] = useState('');

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setBots(data.bots);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the data:', error);
        setLoading(false);
        setError(error.message);
      });
  }, []);

  const handleSortChange = (sortType) => {
    setSortingCriteria(sortType);

    // Implement the sorting logic based on the selected sorting criteria (health, damage, armor)
    // You can sort the 'bots' array using the 'sortType' and update the 'bots' state with the sorted array.
    // For example:
    const sortedBots = [...bots].sort((a, b) => b[sortType] - a[sortType]);
    setBots(sortedBots);
  };

  const enlistBot = (bot) => {
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, army: true } : b))
    );
  };

  const removeBot = (bot) => {
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, army: false } : b))
    );
  };

  const deleteBot = (bot) => {
    setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const botArmyProps = {
    bots: bots.filter((b) => b.army),
    removeBot,
    deleteBot,
  };

  const botCollectionProps = {
    bots,
    enlistBot,
    deleteBot,
  };

  return (
    <div>
      {/* Render the SortBar component */}
      <SortBar onChange={handleSortChange} />

      {/* Render the YourBotArmy and BotCollection components */}
      <YourBotArmy {...botArmyProps} />
      <BotCollection {...botCollectionProps} />
    </div>
  );
}

export default BotsPage;

import React, {useState, useEffect} from 'react'



function BotCollection (){


    const [bots,setbots]= useState ([])

     useEffect(() => {

        fetch( 'http://localhost:3000/bots')
            .then(r => {
                if (r.ok) {
                    return r.json();
                }
                throw new Error("Failed to fetch items.");
            })
            .then(data => {
              
                setbots(data);
            })
            .catch(error => console.error("Error fetching items:", error));
            fetchBots();
    }, []); 
}

return (
    <div>
      <h1>Bot Collection</h1>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
          </li>
        ))}
      </ul>
    </div>
  );


export default BotCollection;

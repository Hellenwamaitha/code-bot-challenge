import React from "react";
import './BotCard.css';

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};


function BotCard({ bot, clickEvent, deleteBot }) {
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={() => clickEvent(bot)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} style={{ maxWidth: "100px" }} />
        </div>
        <div className="content">
          <div className="header" style={{ fontSize: "1rem" }}>
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small style={{ fontSize: "0.8rem" }}>
              {bot.catchphrase.length > 30
                ? `${bot.catchphrase.slice(0, 30)}...`
                : bot.catchphrase}
            </small>
          </div>
        </div>
        <div className="extra content" style={{ paddingTop: "4px" }}>
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteBot(bot);
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;

import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  Summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr Its cold!",
    iconName: "snowflake",
  },
};

const getSeason = (lati, month) => {
  if (month > 2 && month < 9) {
    return lati > 0 ? "Summer" : "winter";
  } else {
    return lati > 0 ? "winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

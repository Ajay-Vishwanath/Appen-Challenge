import React from 'react';
import "./Weatherbot.css";

const WeatherbotIndexItem = props => {

    let imageUrl;

    if (props.date.weather === "Sunny") {
      imageUrl = "/sunny.png";
    } else if (props.date.weather === "Partly Cloudy") {
      imageUrl = "/partly cloudy.png";
    } else if (props.date.weather === "Cloudy") {
      imageUrl = "/cloudy.png";
    }

    return(
        <div className="weatherbot-item">
            <span id='item-day'>{props.date.dayOfWeek.slice(0,3)}</span>
            <img class='item-image'src={imageUrl} alt=""/>
        </div>
    )
}

export default WeatherbotIndexItem;
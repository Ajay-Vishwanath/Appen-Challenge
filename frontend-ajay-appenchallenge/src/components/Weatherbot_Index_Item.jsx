import React from 'react';
import "./Weatherbot.css";

const WeatherbotIndexItem = props => {

    function highestTemp(array){
      let max = Number.NEGATIVE_INFINITY;

      for (let i=0; i<array.length; i++){
        if (array[i] > max) max = array[i];
      }

      return max;
    }

    function lowestTemp(array) {
      let min = Number.POSITIVE_INFINITY;

      for (let i = 0; i < array.length; i++) {
        if (array[i] < min) min = array[i];
      }

      return min;
    }

    let imageUrl;

    if (props.date.weather === "Sunny") {
      imageUrl = "/sunny.png";
    } else if (props.date.weather === "Partly Cloudy") {
      imageUrl = "/partly cloudy.png";
    } else if (props.date.weather === "Cloudy") {
      imageUrl = "/cloudy.png";
    }

    function changeDate(){
      props.changeDate(props.date)
    }

    return (
      <div className="weatherbot-item" onClick={changeDate}>
        <span id="item-day">{props.date.dayOfWeek.slice(0, 3)}</span>
        <img className="item-image" src={imageUrl} alt="" />
        <div>
          <span className="item-temp">
            {highestTemp(props.date.temperature)}°
          </span>
          <span className="item-temp-low">
            {lowestTemp(props.date.temperature)}°
          </span>
        </div>
      </div>
    );
}

export default WeatherbotIndexItem;
import React, { Component } from "react";
import "./Weatherbot.css";

class WeatherbotIndexItem extends Component {
  constructor(props) {
    super(props);

    this.highestTemp = this.highestTemp.bind(this);
    this.lowestTemp = this.lowestTemp.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  componentDidUpdate() {
    if (this.props.date.id === 1) {
      debugger;
    }
  }

  highestTemp(array) {
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) max = array[i];
    }

    if (this.props.celcius) {
      return this.props.convertToCelcius(max);
    } else return max;
  }

  lowestTemp(array) {
    let min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) min = array[i];
    }

    if (this.props.celcius) {
      return this.props.convertToCelcius(min);
    }
    return min;
  }

  changeDate() {
    this.props.changeDate(this.props.date);
  }

  render() {
    let imageUrl;

    if (this.props.date.weather === "Sunny") {
      imageUrl = "/sunny.png";
    } else if (this.props.date.weather === "Partly Cloudy") {
      imageUrl = "/partly cloudy.png";
    } else if (this.props.date.weather === "Cloudy") {
      imageUrl = "/cloudy.png";
    }

    let weatherbotClass =
      this.props.currentDate === this.props.date
        ? "weatherbot-item-selected"
        : "weatherbot-item";

    return (
      <div className={weatherbotClass} onClick={this.changeDate}>
        <span id="item-day">{this.props.date.dayOfWeek.slice(0, 3)}</span>
        <img className="item-image" src={imageUrl} alt="" />
        <div>
          <span className="item-temp">
            {this.highestTemp(this.props.date.temperature)}°
          </span>
          <span className="item-temp-low">
            {this.lowestTemp(this.props.date.temperature)}°
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherbotIndexItem;

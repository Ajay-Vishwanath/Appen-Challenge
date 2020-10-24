import React, { Component } from "react";
import DateDataService from "../service/WeatherbotService";
import "./Weatherbot.css";
import WeatherbotindexItem from "./Weatherbot_Index_Item";

class Weatherbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: null,
      weather: null,
      date: null,
      dates: null,
      highestTemp: null
    };

    this.changeDate = this.changeDate.bind(this);
    this.highestTemp = this.highestTemp.bind(this);
  }

  componentDidMount() {
    DateDataService.retrieveAllDates().then((response) => {
      this.setState({ dates: response.data, date: response.data[0] });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.setState({
        dayOfWeek: this.state.date.dayOfWeek,
        weather: this.state.date.weather,
        highestTemp: this.highestTemp(this.state.date.temperature)
      });
    }
  }

  highestTemp(array) {
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) max = array[i];
    }

    return max;
  }

  changeDate(date) {
    this.setState({ date: date });
  }

  render() {
    const dates = this.state.dates
      ? this.state.dates.map((date) => {
          return (
            <WeatherbotindexItem
              key={date.id}
              date={date}
              changeDate={this.changeDate}
            />
          );
        })
      : null;

    let imageUrl;

    if (this.state.weather === "Sunny") {
      imageUrl = "/sunny.png";
    } else if (this.state.weather === "Partly Cloudy") {
      imageUrl = "/partly cloudy.png";
    } else if (this.state.weather === "Cloudy") {
      imageUrl = "/cloudy.png";
    }

    return (
      <div className="container">
        <div className="weatherbot-content">
          <span id="location">Sunnyvale, CA 94085</span>
          <span className="information">{this.state.dayOfWeek}</span>
          <span className="information">{this.state.weather}</span>
          <div id="current-weather-info">
            <img src={imageUrl} alt="weather-icon" id="current-weather-pic" />
            <span id="current-temp">{this.state.highestTemp}</span>
            <span>°C</span>
            <span>&nbsp;|&nbsp;</span>
            <span>°F</span>
          </div>
          <div id="weatherbot-item-container">{dates}</div>
        </div>
      </div>
    );
  }
}

export default Weatherbot;

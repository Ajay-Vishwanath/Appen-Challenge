import React, { Component } from 'react';
import DateDataService from '../service/WeatherbotService'
import './Weatherbot.css'
import WeatherbotindexItem from './Weatherbot_Index_Item'

class Weatherbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: null,
      weather: null,
      date: null,
      dates: null,
    };
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
      });
    }
  }

  render() {
    const dates = (this.state.dates) ? (this.state.dates.map(date => {
      return <WeatherbotindexItem key={date.id} date={date}/>
    })) : null

    let imageUrl;

    if (this.state.weather === "Sunny"){
      imageUrl = '/sunny.png'
    } else if (this.state.weather === "Partly Cloudy"){
      imageUrl = '/partly cloudy.png'
    } else if (this.state.weather === "Cloudy") {
      imageUrl = '/cloudy.png'
    }

    return (
      <div className="container">
        <div className="weatherbot-content">
          <span id="location">Sunnyvale, CA 94085</span>
          <span className="information">{this.state.dayOfWeek}</span>
          <span className="information">{this.state.weather}</span>
          <div id="current-weather-info">
            <img src={imageUrl} alt="weather-icon" id="current-weather-pic" />
            <span id="current-temp">13</span>
            <span>°C</span>
            <span>&nbsp;|&nbsp;</span>
            <span>°F</span>
          </div>
          <div id="weatherbot-item-container">
          {dates}
          </div>
        </div>
      </div>
    );
  }
}

export default Weatherbot;

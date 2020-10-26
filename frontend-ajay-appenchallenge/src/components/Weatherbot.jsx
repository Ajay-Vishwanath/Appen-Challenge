import React, { Component } from "react";
import DateDataService from "../service/WeatherbotService";
import "./Weatherbot.css";
import WeatherbotindexItem from "./Weatherbot_Index_Item";
import { Line } from "react-chartjs-2";
import chartOptions from "./Weatherbot_chart_options";
import ChartDataLabels from "chartjs-plugin-datalabels";

class Weatherbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: null,
      weather: null,
      date: null,
      dates: null,
      highestTemp: null,
      celcius: false,
    };

    this.changeDate = this.changeDate.bind(this);
    this.highestTemp = this.highestTemp.bind(this);
    this.toggleTemp = this.toggleTemp.bind(this);
  }

  componentDidMount() {
    debugger;
    DateDataService.retrieveAllDates().then((response) => {
      this.setState({ dates: response.data, date: response.data[0] });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.setState({
        dayOfWeek: this.state.date.dayOfWeek,
        weather: this.state.date.weather,
        highestTemp: this.highestTemp(this.state.date.temperature),
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

  convertToCelcius(temp) {
    return Math.round(((temp - 32) * 5) / 9);
  }

  toggleTemp() {
    this.setState({ celcius: !this.state.celcius });
  }

  render() {
    const dates = this.state.dates
      ? this.state.dates.map((date) => {
          return (
            <WeatherbotindexItem
              key={date.id}
              date={date}
              currentDate={this.state.date}
              changeDate={this.changeDate}
              celcius={this.state.celcius}
              convertToCelcius={this.convertToCelcius}
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

    let weatherGraph = null;

    if (this.state.date !== null) {
      let tempData = this.state.celcius
        ? this.state.date.temperature
            .slice()
            .map((temp) => this.convertToCelcius(temp))
        : this.state.date.temperature.slice();
      let graphData = {
        labels: ["3AM", "6AM", "9AM", "12PM", "3PM", "6PM", "9PM", "12AM"],
        datasets: [
          {
            data: tempData,
            backgroundColor: "#FFF7E4",
            borderColor: "#FFD35D",
          },
        ],
      };
      weatherGraph = (
        <Line data={graphData} height={50} options={chartOptions} />
      );
    }

    let highestTemp = this.state.celcius
      ? this.convertToCelcius(this.state.highestTemp)
      : this.state.highestTemp;

    let celciusClass = this.state.celcius ? "temp-selected" : "temp";

    let farenheightClass = this.state.celcius ? "temp" : "temp-selected";

    return (
      <div className="container">
        <div className="weatherbot-content">
          <span id="location">Sunnyvale, CA 94085</span>
          <span className="information">{this.state.dayOfWeek}</span>
          <span className="information">{this.state.weather}</span>
          <div id="current-weather-info">
            <img src={imageUrl} alt="weather-icon" id="current-weather-pic" />
            <span id="current-temp">{highestTemp}</span>
            <span className={celciusClass} onClick={this.toggleTemp}>
              °C
            </span>
            <span>&nbsp;|&nbsp;</span>
            <span className={farenheightClass} onClick={this.toggleTemp}>
              °F
            </span>
          </div>
          {weatherGraph}
          <div id="weatherbot-item-container">{dates}</div>
        </div>
      </div>
    );
  }
}

export default Weatherbot;

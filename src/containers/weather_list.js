import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temp} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="red" units="%" />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStatetoProps({ weather }) {
  return { weather };
  // return { weather: state.weather };
}

export default connect(mapStatetoProps)(WeatherList);

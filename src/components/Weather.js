'use strict';

import React from 'react';
import { Link } from 'react-router';

const weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&appid=7a9a047cd79788f2b905a34f1645d168';

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export default class Weather extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        city: [],
        list: []
       };

  }

  componentWillMount() {
      this.importState = this.importState.bind(this);
      fetch(weatherURL)
          .then(checkStatus)
          .then(parseJSON)
          .then(this.importState)
          .catch(function(err) {
            console.log(err);
          });
  }

  importState(item) {
    // console.log('item',item);
    this.setState({city:item.city});
    this.setState({list:item.list});
  }

  render() {

    return (

      <div className="weather-container">

        <h1 className="title">5 day weather forecast: {this.state.city.name}, {this.state.city.country}</h1>

          {this.props.children}
          <div className="weather-items">

           {this.state.list.map(function(listItem) {
              return (
                <div key={listItem.dt} className="item">

                <span>{listItem.dt_txt}</span>

                  {listItem.weather.map(function(weatherItem) {
                    var iconUrl = "http://openweathermap.org/img/w/" + weatherItem.icon + ".png";
                    return (
                      <ul key={weatherItem.id} className="item">
                        <li><img src={iconUrl} /></li>
                        <li>{weatherItem.description}</li>
                    </ul>
                    );
                  })}

                  <h3 className="temp">{listItem.main.temp}&#8451;</h3>

                </div>
              );
            })}

          </div>

      </div>

    );
  }

}


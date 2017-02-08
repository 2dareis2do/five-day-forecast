"use strict";

var fetch = require('node-fetch');
 
// if you are on node v0.10, set a Promise library first, eg. 
// fetch.Promise = require('bluebird'); 

// plain text or html

// fetch('https://github.com/')
//     .then(function(res) {
//         return res.text();
//     }).then(function(body) {
//         console.log(body);
//     });

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
var data;
// json
var weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&appid=7a9a047cd79788f2b905a34f1645d168';
fetch(weatherURL)
    .then(checkStatus)
    .then(parseJSON)
    .then(function(json) {
        console.log(json);
        data = json;
        console.log('data.city.name',data.city.name);
        console.log('data.list',data.list);
        console.log('data.list[0]',data.list[0]);
        console.log('data.list[0].main.temp',data.list[0].main.temp);
        console.log('data.list[0].weather[0].main',data.list[0].weather[0].main);
        console.log('data.list[0].weather.description',data.list[0].weather[0].description);
        console.log('data.list[0].weather[0].icon',data.list[0].weather[0].icon);
        console.log('data.list[0].sys',data.list[0].sys);
        console.log('data.list[0].sys.sunrise',data.list[0].sys.sunrise);

        var iconCode = data.list[0].weather[0].icon;
        console.log('var iconUrl = ', "http://openweathermap.org/img/w/" + iconCode + ".png");
    }).catch(function(err) {
        console.log(err);
    });

// export default data;




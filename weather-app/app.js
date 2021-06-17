const request = require("request");
const chalk = require("chalk");

const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];

if (!address) {
  console.log("Please provide address");
} else {
  //geocode data
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    //get weather data
    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(chalk.bgGreen("Data:"), forecastData);
    });
  });
}
//callbcak chaining

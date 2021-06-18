const request = require("request");

const forecast = (lat, long, callBack) => {
  const apiKey; //commenting out my api key for security

  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${encodeURIComponent(
    long
  )},${encodeURIComponent(lat)}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callBack("Unable to connect to system", undefined);
    } else if (body.error) {
      callBack("Unable to get weather of location", undefined);
    } else {
      const data = body;
      // console.log(data);
      callBack(
        undefined,
        `The city at Lat:${lat}, and Long:${long} is ${data.location.name}. 
        The weather is ${data.current.weather_descriptions}. Temperature is ${data.current.temperature} degrees`
      );
    }
  });
};

module.exports = forecast;

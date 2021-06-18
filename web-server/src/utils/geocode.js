const request = require("request");

const geocode = (address, callBack) => {
  const key; //commenting out my api key for security
    

  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${key}&limit=1`;

  request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
      callBack("Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callBack("Unable to find location", undefined);
    } else {
      callBack(undefined, {
        location: response.body.features[0].place_name,
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
      });
    }
  });
};
module.exports = geocode;

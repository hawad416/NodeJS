// creating raw http request using core module, without external module like without using request module.
//just practice using raw node, adn reading documentation
const https = require("https");

const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGF3YWQ0MTYiLCJhIjoiY2txMGtzM2gyMDVzdjJ4cGxscjNpZTBjbiJ9.n8FnknBabbf-L0lIZM_x-g&limit=1";

const request = https.request(url, (response) => {
  let data = "";
  response.on("data", (chunck) => {
    data += chunck.toString();
  });

  response.on("end", () => {
    console.log(JSON.parse(data));
  });
});

request.on("error", () => {
  console.log("error", error);
});
request.end();

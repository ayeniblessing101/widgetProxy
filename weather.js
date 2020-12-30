const request = require("request");

const weather = function (location, callback) {
  const url =
    "http://api.weatherstack.com/current?access_key=ab8f7fac1de861ca98642b901ad8fbc1&query=" +
    location;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, { ...body });
    }
  });
};

module.exports = weather;

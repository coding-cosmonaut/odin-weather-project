// API keys
// weather: ddb39aee23f242b3992194953242703
// giphy: OaeV76rXJPjKoCQO350DmOuAON1mFS5I

const parseData = function extractDataFromRequest(weatherData) {
  console.log(weatherData.current, "in parse");
};

const APIrequest = async function getWeatherData(location) {
  const weatherData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=ddb39aee23f242b3992194953242703&q=${location}`
  );
  const jsonData = await weatherData.json();
  if (jsonData) {
    console.log("done");
    parseData(jsonData);
  } else {
    console.log("not done");
  }
  return jsonData;
};

export default APIrequest;

// API keys
// weather: ddb39aee23f242b3992194953242703
// giphy: OaeV76rXJPjKoCQO350DmOuAON1mFS5I
import { getValue, render, placeholder } from "./DOM";

const parseData = function extractDataFromRequest(weatherData) {
  console.log(weatherData, "in parse");
  return {
    city: weatherData.location.name,
    temp: weatherData.current.temp_f,
    feels: weatherData.current.feelslike_f,
    hum: weatherData.current.humidity,
    wind: weatherData.current.wind_mph,
  };
};

const APIrequest = async function getWeatherData(location) {
  location = getValue();
  if (!location) {
    placeholder();
    return;
  }
  try {
    const weatherData = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=ddb39aee23f242b3992194953242703&q=${location}`
    );
    const jsonData = await weatherData.json();
    placeholder("remove");
    const dataINeed = parseData(jsonData);
    render(dataINeed);
  } catch (err) {
    throw new Error("Error!");
  }
};

export default APIrequest;

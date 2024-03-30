import "./style.css";
import APIrequest from "./getWeather";
import { searchButton } from "./DOM";
import giphyAPIRequest from "./getGiphy";

searchButton.addEventListener("click", APIrequest);


// giphyAPIRequest('cloudy')

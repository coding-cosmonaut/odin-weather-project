import "./style.css";
import APIrequest from "./getWeather";
import { searchButton } from "./DOM";

searchButton.addEventListener("click", APIrequest);

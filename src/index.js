import displayCard from '../modules/displayCard';
import "./style.css";

const API = "https://api.tvmaze.com/shows";
const fetch_api = async () => {
  await fetch(API)
    .then((response) => response.json())
    .then((json) => json)
    .then((data) => {
      displayCard(data)
    });
};

fetch_api();


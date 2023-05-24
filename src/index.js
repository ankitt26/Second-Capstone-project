import displayCard from '../modules/displayCard.js';
import './style.css';

const API = 'https://api.tvmaze.com/shows';
const fetchApi = async () => {
  await fetch(API)
    .then((response) => response.json())
    .then((json) => json)
    .then((data) => {
      displayCard(data);
    });
};

fetchApi();

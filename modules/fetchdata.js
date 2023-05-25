import displayCard from './displayCard.js';

const API = 'https://api.tvmaze.com/shows';

export default async () => {
  await fetch(API)
    .then((response) => response.json())
    .then((json) => json)
    .then((data) => {
      displayCard(data);
    });
};
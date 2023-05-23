import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

const getData = async () => {
  const result = await fetch('https://api.tvmaze.com/shows');
  const data = await result.json();
  return data;
};
const movies = document.getElementById('movie-data');
const displaydata = async () => {
  const data = await getData();
  data.forEach((data, i) => {
    movies.innerHTML += `
    <div class='images'>
    <img class='film' src=${data.image.medium}>
    <p class='film-name'>${data.name}</p>
    <div class="likes-comment">
    <button class="likebtn" data-index="${i}">Like</button>
    <button class="commentbtn" data-index="${i}">comment</button>
    </div>
    </div>`;
  });
};
displaydata();
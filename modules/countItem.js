const item = document.querySelector('.main-section');
const movieC = document.getElementById('movies');
export default () => {
  const itemsCount = item.childNodes.length;
  movieC.innerHTML += ` (${itemsCount})`;
};
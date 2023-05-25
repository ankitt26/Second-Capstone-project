export default () => {
  const movieC = document.getElementById("movies");
  const item = document.querySelectorAll(".card");
  
  const itemsCount = item.length;
  movieC.innerHTML = ` (${itemsCount})`;
};

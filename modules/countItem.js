const item = document.querySelector('.main-section');
const movieC = document.getElementById('movies')
export default (data)=>{
    const itemsCount = item.childNodes.length;
    console.log(itemsCount);
    movieC.innerHTML += ` (${itemsCount})`
}
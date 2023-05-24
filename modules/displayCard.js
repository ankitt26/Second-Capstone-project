const mainSection = document.querySelector('.main-section');
export default (data) => {
  data.forEach((data) => {
    mainSection.innerHTML += `<div class="card" id="${data.id}">
<img
  class="card-img"
  src=${data.image.original}
  alt="${data.name}"
/>
<div class="detail">
  <h3>${data.name}</h3>
  <div class="likes">
    <i class="fa-solid fa-heart like-icon"></i>
    <span class="count-like">2 likes</span>
  </div>
</div>
<button class="comment-btn">comments</button>
</div>`;
  });
};
const mainSection = document.querySelector('.main-section');
export default (data) => {
  data.forEach((data, index) => {
    mainSection.innerHTML += `<div class="card" id="${data.id}">
<img
  class="card-img"
  src=${data.image.original}
  alt="${data.name}"
/>
<div class="detail">
  <h3>${data.name}</h3>
  <div class="likes">
    <i class="fa-solid fa-heart like-icon"  id="icon${data.id}"></i>
    <span class="count-like" id="item${data.id}">0 likes</span>
  </div>
</div>
<button class="comment-btn" data-index="${index}" >comments</button>
</div>`;
  });
};

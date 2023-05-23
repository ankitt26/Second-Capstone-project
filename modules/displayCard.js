const mainSection = document.querySelector(".main-section");
export default (data) => {
  for (let i = 0; i < 12; i++) {
    mainSection.innerHTML += `<div class="card" id="${data[i].id}">
<img
  class="card-img"
  src=${data[i].image.original}
  alt="${data[i].name}"
/>
<div class="detail">
  <h3>${data[i].name}</h3>
  <div class="likes">
    <i class="fa-solid fa-heart like-icon"></i>
    <span class="count-like">2 likes</span>
  </div>
</div>
<button class="comment-btn">comments</button>
</div>`;
  }
};

import addComment from './addcomment.js';
import displayComments from './displaycomment.js';

export default async (data) => {
  const mainSection = document.querySelector('.main-section');
  mainSection.addEventListener('click', async (event) => {
    if (event.target.classList.contains('comment-btn')) {
      const index = parseInt(event.target.dataset.index, 10);
      // const data = await fetchApi();
      const selected = data[index];
      const moviedetails = document.getElementById('comment-info');
      moviedetails.innerHTML = `
      <img class="pop-img" src=${selected.image.medium}>
      <p class="movieName">${selected.name}</p>
      <div class="info-ms">
        <p class="sum">LANGUAGE: ${selected.language}</p>
        <p class="sum">Status: ${selected.status}</p>
        <p class="sum">PREMIERED: ${selected.premiered}</p>
        <p class="sum">ENDED: ${selected.ended}</p>
        <br>
        <br>
        <p class="sum">SUMMARY:</p>
        <div class="summary-text">${selected.summary}</div>
        <button id="close-btn">×</button>
        <ul id="comment-list"></ul>
        <form class="form" id='input-form'>
          <h3>Add a comment</h3>
          <input type="text" id="user" name="username" required placeholder="Your name"/>
          <textarea id="comment" rows="4" cols="40" required placeholder="Your insights"></textarea>
          <button class="submit" id="submit" data-index="${selected.id}" type="submit">Comment</button>
        </form>
      </div>
    `;
      const user = document.getElementById('user');
      const comment = document.getElementById('comment');
      const commentbtn = document.querySelector('#comment-info .submit');
      commentbtn.dataset.index = selected.id;
      commentbtn.addEventListener('click', async (e) => {
        e.preventDefault();
        await addComment(selected.id, user.value, comment.value);
        user.value = '';
        comment.value = '';
        displayComments(selected.id);
      });
      displayComments(selected.id);
      const closeButton = document.getElementById('close-btn');
      const commentpopup = document.getElementById('comment-popup');
      commentpopup.classList.add('show');
      const commentsection = document.getElementById('comment-section');
      commentsection.classList.add('show');
      closeButton.addEventListener('click', () => {
        commentpopup.classList.remove('show');
        commentsection.classList.remove('show');
      });
    }
  });
};
import fetchLikes from './fetchLikes.js';

const appId = 'rtnq9Qf95LeYRJqVUQcC';

const updateLike = async (id) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  ).then(() => fetchLikes());
};

export default () => {
  const main = document.querySelector('.main-section');
  const len = main.childNodes.length;

  for (let i = 1; i <= len; i += 1) {
    const likebtn = document.getElementById(`icon${i}`);
    if (likebtn !== null) {
      likebtn.addEventListener('click', () => {
        const uId = `item${i}`;
        updateLike(uId);
      });
    }
  }
};

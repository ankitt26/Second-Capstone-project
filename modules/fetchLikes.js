import displayLike from './displayLike.js';

const appId = 'rtnq9Qf95LeYRJqVUQcC';
export default async () => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,
  )
    .then((response) => response.json())
    .then((json) => {
      displayLike(json);
    });
};

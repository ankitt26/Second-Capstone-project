const appId = 'EzcPmGAtZ0RFezt2A6le';
export default async () => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,
  )
    .then((response) => response.json())
    .then((json) => json);
};

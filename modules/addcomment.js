const addComment = async (id, username, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pBIYWv6nEx7bPsY1jHDg/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('response from API', response);
  return response;
};
export default addComment;
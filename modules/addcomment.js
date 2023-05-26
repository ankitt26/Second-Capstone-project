const addComment = async (id, username, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rtnq9Qf95LeYRJqVUQcC/comments', {
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
  return response;
};
export default addComment;
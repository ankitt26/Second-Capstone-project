const getComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rtnq9Qf95LeYRJqVUQcC/comments?item_id=${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

const displayComments = async (id) => {
  const data = await getComments(id);
  const scoreboard = document.getElementById('comment-list');
  scoreboard.innerHTML = '';
  scoreboard.classList.add('comment-list'); // Add class for comment list
  const header = document.createElement('h3');
  header.textContent = `Comments ${data.length ? `(${data.length})` : ''}`;
  scoreboard.appendChild(header);
  if (!data.error) {
    data.forEach((comm) => {
      const li = document.createElement('li');
      li.classList.add('comment-item');
      li.textContent = `${comm.creation_date} ${comm.username} : ${comm.comment}`;
      scoreboard.appendChild(li);
    });
  }
};

export default displayComments;
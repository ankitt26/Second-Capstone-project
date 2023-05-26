import commentscount from './modules/comments.js';
import fakeComments from './modules/fakecomments.js';

describe('test for comment count function', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(fakeComments),
  }));
  it('comments count is equal to 20', async () => {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pBIYWv6nEx7bPsY1jHDg/comments?item_id=${120}`);
    const APIresponse = await response.json();

    const data = await commentscount(APIresponse);
    expect(data.length).toBe(20);
  });

  it('if no comment', async () => {
    const data = await commentscount({});
    expect(data).toBe(0);
  });
});
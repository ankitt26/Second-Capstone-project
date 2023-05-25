import countItem from './countItem.js';

describe('test count items', () => {
  test('test 1', () => {
    document.body.innerHTML = `
    <li class="nav-li">
          <a href="#" class="nav-a active">Movies <span id="movies"></span></a>
        </li>
        <main class="main-section">
        <div class="card"> </div>
        <div class="card"> </div>
        <div class="card"> </div>
        </main>
    `;
    const movieC = document.getElementById('movies');
    countItem();

    expect(movieC.innerHTML).toBe(' (3)');
  });

  test('test 2', () => {
    document.body.innerHTML = `
    <li class="nav-li">
          <a href="#" class="nav-a active">Movies <span id="movies"></span></a>
        </li>
        <main class="main-section">
        <div class="card"> </div>
        <div class="card"> </div>
        <div class="card"> </div>
        <div class="card"> </div>
        <div class="card"> </div>
        </main>
    `;
    const movieC = document.getElementById('movies');
    countItem();

    expect(movieC.innerHTML).toBe(' (5)');
  });
});

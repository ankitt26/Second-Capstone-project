export default () => {
  const main = document.querySelector('.main-section');
  const len = main.childNodes.length;

  for (let i = 1; i <= len; i += 1) {
    const likebtn = document.getElementById(`icon${i}`);
    if (likebtn !== null) {
      likebtn.addEventListener('click', () => {

      });
    }
  }
};

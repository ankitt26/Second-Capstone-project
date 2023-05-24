export default async (likeN) => {
  likeN.forEach((value, i) => {
    const likebtn = document.querySelectorAll('.count-like')[i];
    likebtn.innerHTML = `${value.likes} likes`;
  });
};

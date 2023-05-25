export default async (json) => {
  json.forEach((value) => {
    const likebtn = document.getElementById(value.item_id);
    likebtn.innerHTML = `${value.likes} likes`;
  });
};

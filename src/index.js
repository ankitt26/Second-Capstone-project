import countItem from '../modules/countItem.js';
import fetchLikes from '../modules/fetchLikes.js';
import fetchApi from '../modules/fetchdata.js';
import updateLike from '../modules/updateLike.js';
import './style.css';

const func = async () => {
  await fetchApi();
  fetchLikes();
  updateLike();
  countItem();
};

func();
import fetchLikes from '../modules/fetchLikes.js';
import fetchApi from '../modules/fetchdata.js';
import './style.css';

const func = async () => {
  await fetchApi();
  fetchLikes();
};

func();
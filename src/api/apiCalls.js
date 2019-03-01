import axios from 'axios';

export const apiGetNews = (url) => axios.get(url)
  .then(response => response.data)
  .catch(err => {
    return err;
  });

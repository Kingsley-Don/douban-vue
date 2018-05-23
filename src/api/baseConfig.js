import axios from 'axios';

const APIKEY = '0df993c66c0c636e29ecbb5344252a4a';
const HOST = '/api/movie/';

axios.defaults.params = { apikey: APIKEY };

export default (url, params = {}) => new Promise((resolve, reject) => {
  axios
    .get(HOST + url, { params })
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

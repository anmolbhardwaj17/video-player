import axios from 'axios';

const KEY = 'AIzaSyCnhxVc_cZ5ovRI5HnQZpOaEAcOZAktFJg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});


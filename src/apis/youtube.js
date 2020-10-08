import axios from 'axios';

const KEY = "You think I'm gonna show you my api key, HELL NO!!";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});


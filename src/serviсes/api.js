import axios from 'axios';

const API_KEY = '32898572-a7cb8748a061f2e03d174a1bc';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getPictures = async (query, page = 1) => {
  const { data } = await axios.get(
    `?key=${API_KEY}&q=${query}&page=${page}&per_page=12&orientation=horizontal`
  );

  return data;
};

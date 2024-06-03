import axios from 'axios';

const strapi = axios.create({
  baseURL: 'http://localhost:1337/api', // Update with your Strapi API URL
});

// Set the JWT token for authenticated requests
export const setAuthToken = (token) => {
  if (token) {
    strapi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete strapi.defaults.headers.common['Authorization'];
  }
};

export default strapi;

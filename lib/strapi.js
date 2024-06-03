// lib/strapi.js
import axios from 'axios';

const strapi = axios.create({
  baseURL: 'http://localhost:1337/api', // Update with your Strapi API URL
});

export default strapi;

const axios = require("axios");

const movieApi= axios.create({
  baseURL:"https://api.themoviedb.org/3",
  timeout:30000,
});

module.exports = movieApi;

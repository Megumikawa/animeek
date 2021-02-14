require('../db/index.js')

const AnimeModel = require('../models/Anime.model')

//const axios = require('axios')
const mongoose = require('mongoose')

const axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/search/anime',
  params: {q: '<REQUIRED>'},
  headers: {
    'x-rapidapi-key': 'a15b028483mshd7de36fe4ec3c86p1dd3adjsnc9a9d91ca457',
    'x-rapidapi-host': 'jikan1.p.rapidapi.com'
  }
};

axios.request(options)
.then(function (response) {
	console.log(response.data);
})
.catch(function (error) {
	console.error(error);
});

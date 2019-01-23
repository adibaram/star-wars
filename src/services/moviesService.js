import axios from 'axios';
import storageService from './storageService.js';


function getMovies() {

         return axios.get('https://swapi.co/api/films/');
          
}

// function getMovies() {
//     var movies = require('./movies.json')
//     return movies;
// }

export default{
    getMovies
}


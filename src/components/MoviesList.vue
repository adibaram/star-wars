<template>
    <section>

        <ul v-for="(movie, index) in movies" @click="saveFavorite(index)":key="index">
            <li>{{ movie.title }}</li>
            <h4 v-if="movies[index].favorite">⭐</h4>
        </ul>
    </section>

</template>

<script>

import moviesService from '../services/moviesService.js'; 
import storageService from '../services/storageService.js'

export default {
    data() {
        return {
            movies: null
        }
    }, 
    created() {
        let movies = storageService.loadFromStorage('movies'); 
        if (movies) {
            this.movies = movies;
        } else {
            moviesService.getMovies()
            .then(movies => {
                console.log(movies.data.results)
                this.movies = movies.data.results;
                storageService.saveToStorage('movies',movies.data.results);
            })
        }

    },
    computed: {

    },
    methods: {
       saveFavorite(index) {
           console.log('kk')
            
            if ( this.movies[index].favorite) {
                 this.movies[index].favorite = false;
                 storageService.saveToStorage('movies', this.movies);
            } else if (this.movies[index].favorite != true) {
                this.movies[index].favorite = true;
                console.log('dds')
                storageService.saveToStorage('movies', this.movies);
           }
       },
         markFavorite() {
            if (this.movies.favorite === true) return 'favorite';
        }
    },
    

}
</script>
    
<style>
    li {
        list-style-type: none;
        display: inline-block;

    }
    h4 {
        display: inline-block;
    }


</style>

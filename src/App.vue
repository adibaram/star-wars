<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Star World movies</h1>
    <h2>Select your favorite movies</h2>
    <movies-list></movies-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MoviesList from './components/MoviesList.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    MoviesList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   data () {
//     return {
//       info: null
//     }
//   },
//   mounted () {
//     axios
//       .get('https://swapi.co/api/films/')
//       .then(response => (this.info = response))
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')

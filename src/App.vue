<template lang="html">
  <div>
    <nav-bar></nav-bar>
    <router-view :beersProp="beersArray" :favouritesProp="favouriteBeersArray"></router-view>
  </div>
</template>

<script>
import {eventBus} from "./main.js";
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  data(){
    return {
      beersArray: [],
      favouriteBeersArray: []
    }
  },
  mounted(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(data => this.beersArray = data)
    eventBus.$on("beer-clicked", (beer) => {
      this.favouriteBeersArray.push(beer)
    })
  },
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style lang="css" scoped>
</style>

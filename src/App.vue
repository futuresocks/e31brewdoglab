<template lang="html">
  <div>
  <h1>HI</h1>
  <router-view :beersProp="beersArray"></router-view>
  </div>
</template>

<script>
  import BeerView from './views/BeerView.vue';
  import {eventBus} from "./main.js";

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
  components : {
    'beer-view': BeerView
  }
}
</script>

<style lang="css" scoped>
</style>

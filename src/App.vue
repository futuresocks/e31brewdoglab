<template lang="html">
  <div>
  <h1>HI</h1>
  <router-view ></router-view>
  </div>
</template>

<script>
  import BeerView from './views/BeerView.vue';

export default {
  name: 'app',
  data(){
    return {
      beersArray: []
    }
  },
  mounted(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(data => this.beersArray = data)
  },
  components : {
    'beer-view': BeerView
  }
}
</script>

<style lang="css" scoped>
</style>

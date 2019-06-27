<template lang="html">
  <h1>HI</h1>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      beers: []
    }
  },
  mounted(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(data => this.beers = data)
  }
}
</script>

<style lang="css" scoped>
</style>

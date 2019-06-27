<template lang="html">

<ul>
  <beer-item v-for="beer in beersProp" :beer="beer" ></beer-item>
</ul>

</template>

<script>
import BeerItem from './BeerItem.vue'

export default {
  name: "beer-list",
  props: [
    "beersProp"
  ],
  components: {
    "beer-item": BeerItem
  }
}
</script>

<style lang="css" scoped>
</style>

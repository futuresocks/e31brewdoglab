<template lang="html">
  <div>
    <beer-list v-bind:beersProp='favouritesProp'></beer-list>
  </div>
</template>

<script>
import BeerList from '@/components/BeerList'

export default {
  name: 'favourites-view',
  props: ['favouritesProp'],
  components: {
    'beer-list': BeerList
  }
}
</script>

<style lang="css" scoped>
</style>

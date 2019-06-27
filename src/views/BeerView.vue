<template lang="html">

<div>
  <beer-list v-bind:beersProp='beersProp'></beer-list>
</div>

</template>

<script>

import BeerList from '@/components/BeerList.vue'

export default {
  name: 'beer-view',
  props: ['beersProp'],
  components: {
    "beer-list": BeerList
  }
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <nav>
    <router-link :to="{ name: 'beer-view' }">Beers</router-link>  |
    <router-link :to="{ name: 'favourites-view'}">Favourites</router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="css" scoped>
</style>

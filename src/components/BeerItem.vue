<template lang="html">

<div>
<li>{{beer.name}}</li>
<button v-if="!onFavouritesView" v-on:click = "handleClick">Add Favourite</button>
</div>

</template>

<script>
import {eventBus} from "@/main.js"
export default {
  name: "beer-item",
  props: ["beer"],
  methods: {
    handleClick(){
      eventBus.$emit("beer-clicked", this.beer)
    }
  },
  computed: {
    onFavouritesView: function(){
      return this.$route.name === "favourites-view"
    }
  }

}
</script>

<style lang="css" scoped>
</style>

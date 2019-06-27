<template lang="html">

<div>
<li>{{beer.name}}</li>
<button v-on:click = "handleClick">Favoritues</button>
</div>

</template>

<script>
import {eventBus} from "../main.js"
export default {
  name: "beer-item",
  props: ["beer"],
  methods: {
    handleClick(){
      eventBus.$emit("beer-clicked", this.beer)
    }
  }
}
</script>

<style lang="css" scoped>
</style>

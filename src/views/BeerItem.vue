<template lang="html">

<div>
<li>{{beer.name}}</li>
<button v-on:click = "handleClick">Favoritues</button>
</div>

</template>

<script>
export default {
  name: "beer-item",
  props: ["beer"],
  methods: {
    handleClick(){
      eventBus.
    }
  }
}
</script>

<style lang="css" scoped>
</style>

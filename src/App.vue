<template lang="pug">
#app
  keep-alive
    router-view(name="bar")
  keep-alive(include="in-theaters")
    router-view
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
</style>

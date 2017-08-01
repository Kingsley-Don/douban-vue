<template lang="pug">
  #app
    router-view(name="bar")
    //- router-view(name="fakeBar")
    transition(name="component-fade")
      keep-alive(include="in-theaters")
        router-view
    //- router-view(name="navi")
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

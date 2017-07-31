<template lang="pug">
  #app
    mu-appbar.placeholder
    router-view(name='bar')
    router-view
    router-view(name='navi')
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

.placeholder
  opacity: 0


</style>

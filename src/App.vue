<template lang="pug">
#app
  keep-alive
    router-view(name="bar")
  transition(name="fade")
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

.fade-enter-active
  transition: transform 0.4s
  transform: translateX(0)

.fade-leave-active
  transition: all .4s
  transform: translateX(-100vw)
  opacity: 0

.fade-leave
  transform: translateX(0)
  opacity: 1

.fade-enter
  transform: translateX(100vw)

#movie-info, .movie-list
  position: absolute
  top: 0
  left: 0

  width: 100%

</style>

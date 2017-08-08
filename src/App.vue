<template lang="pug">
#app
  router-view(name="bar")
  transition.page(name="fade" mode="out-in")
    router-view
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

.fade-enter-active
  transition: all 0.15s
  transform: translateY(0)

.fade-leave-active
  transition: all 0.15s
  opacity: 0

.fade-leave
  opacity: 1

.fade-enter
  opacity: 0

.page
  position: absolute
  top: 0
  left: 0
  width: 100%
  overflow: hidden


</style>

<template lang="pug">
#app
  transition(
    name="fade"
    enter-active-class="animated slideInUp enter-active"
  )
    keep-alive(include="home")
      router-view
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass">
$duration: 0.4s

*
  margin: 0
  padding: 0
  box-sizing: border-box

// .fade-enter
//   opacity: 0.7
//   transform: translateY(100vh)
//
.enter-active
  animation-duration: $duration

.fade-leave
  opacity: 1
  transform: translateY(0)

.fade-leave-active
  transition-duration: $duration
  opacity: 0.5
  transform: translateY(-100px)

.page
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  overflow: auto
  padding-top: 56px
  background-color: black
</style>

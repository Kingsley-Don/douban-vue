<template lang="pug">
#app
  transition(:name="transition")
    keep-alive(include="home")
      router-view
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isBack: false,
    }
  },
  computed: {
    transition() {
      if (this.isBack) {
        return 'back'
      }
      return 'forward'
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.name === 'home'
          || from.name === 'subject'
      ) {
        this.isBack = true
      } else {
        this.isBack = false
      }
    }
  }
}
</script>

<style lang="sass">
$duration: 0.4s

*
  margin: 0
  padding: 0
  box-sizing: border-box

.forward-enter, .back-leave-to
  transform: translateY(100vh)

.forward-enter-to, .back-leave
  transform: translateY(0)

.forward-leave, .back-enter-to
  opacity: 1
  transform: translateY(0)

.forward-leave-to, .back-enter
  opacity: 0.1
  transform: translateY(-100px)


.forward-enter-to,
.forward-leave-to,
.back-enter-to,
.back-leave-to
  transition-duration: $duration

.page
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  overflow: auto
  background-color: #222
  &:not(.subject-page)
    padding-top: 56px

.bg-image
  background-size: cover
  background-repeat: no-repeat
  background-position: center

.text-overflow
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
</style>

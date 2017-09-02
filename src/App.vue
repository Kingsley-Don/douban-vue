<template lang="pug">
#app
  transition(:name="transition")
    //- keep-alive(include="home")
    router-view
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transition: 'back',
      routes: {
        home: 0,
        inTheaters: 1,
        comingSoon: 1,
        subject: 2,
        comments: 3,
        reviews: 3
      }
    }
  },
  computed: {
  },
  watch: {
    '$route'(to, from) {
      if (this.routes[to.name] < this.routes[from.name]) {
        this.transition = 'back'
      } else {
        this.transition = 'forward'
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
  color: white

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
  background-color: #111
  &:not(.subject-page)
    padding-top: $bar-height
  &.home-page
    z-index: 2
  &.list-page
    z-index: 3
  &.subject-page
    z-index: 4
  &.discussion-page
    z-index: 5

.mu-appbar
  color: white
  background-color: #222

.mu-paper
  background-color: #222

.mu-icon.material-icons
  vertical-align: bottom
</style>

<template lang="pug">
mu-appbar.bar(
  :class="{ 'no-bg': isMovie, 'home-bar': isHome }"
  :title="title"
)
  mu-icon-button(
    :icon="icon"
    slot="left"
    @click="iconClick"
  )
  mu-icon-button(
    icon="search"
    slot="right"
    @click="search"
  )
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    icon: {
      type: String,
      default: 'arrow_back'
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'home'
    },
    isMovie() {
      return this.$route.name === 'subject'
    }
  },
  methods: {
    iconClick() {
      if (!this.isHome) {
        this.$router.go(-1)
      }
    },
    search() {

    },
  },
}
</script>

<style lang="sass">
.bar
  position: fixed
  top: 0
  left: 0
  transition: all 0.3s

.no-bg
  background-color: transparent
  box-shadow: 0 1px 6px transparent, 0 1px 4px transparent

// .home-bar .mu-appbar-title span::after
//   content: ' 电影'
//   color: orange
</style>

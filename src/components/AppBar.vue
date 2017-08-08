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
  computed: {
    title() {
      switch (this.$route.name) {
        case 'home':
          return 'Rado'
          break
        case 'in-theaters':
          return '正在热映'
          break
        case 'coming-soon':
          return '即将上映'
          break
        default:
          return ''
      }
    },
    icon() {
      if (this.$route.name === 'home') {
        return 'menu'
      }
      return 'arrow_back'
    },
    isMovie() {
      if (this.$route.name === 'subject') {
        return true
      }
      return false
    },
    isHome() {
      if (this.$route.name === 'home') {
        return true
      }
      return false
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
  mounted() {
  },
  beforeRouteLeave (to, from, next) {
    next()
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

.home-bar .mu-appbar-title span::after
  content: ' 电影'
  color: orange
</style>

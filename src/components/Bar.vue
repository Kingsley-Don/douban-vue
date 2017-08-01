<template lang="pug">
mu-appbar.bar(:title="title", :class="{ 'no-bg': isMovie }")
  mu-icon-button(
    :icon="icon",
    slot="left",
    @click="click"
  )
</template>

<script>
export default {
  data() {
    return {
      title: '正在热映',
      icon: 'arrow_back',
      isMovie: false
    }
  },
  methods: {
    click() {
      if (this.icon === 'arrow_back') {
        this.$router.go(-1)
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'in-theaters') {
      this.title = '正在热映'
      this.isMovie = false
    } else if (to.name === 'movie-info') {
      this.title = ''
      this.isMovie = true
    }
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
  box-shadow: initial
</style>

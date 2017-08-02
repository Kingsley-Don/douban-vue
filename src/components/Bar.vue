<template lang="pug">
mu-appbar.bar(:title="title", :class="{ 'no-bg': isMovie }")
  mu-icon-button(
    v-if="!isIndex",
    :icon="leftIcon",
    slot="left",
    @click="goBack"
  )
  mu-icon-button(
    v-if="!isIndex",
    :icon="rightIcon",
    slot="right",
    @click="search"
  )
</template>

<script>
export default {
  data() {
    return {
      title: '',
      leftIcon: 'arrow_back',
      rightIcon: 'search',
      isMovie: false,
      isIndex: false
    }
  },
  methods: {
    goBack() {
      if (this.leftIcon === 'arrow_back') {
        this.$router.go(-1)
      }
    },
    search() {

    },
    changeStatus(name) {
      if (name === 'in-theaters') {
        this.title = '正在热映'
        this.leftIcon = 'arrow_back'
        this.isMovie = false
      } else if (name === 'movie-info') {
        this.title = ''
        this.leftIcon = 'arrow_back'
        this.isMovie = true
      }
    }
  },
  mounted() {
    this.changeStatus(this.$route.name)
  },
  beforeRouteLeave (to, from, next) {
    this.changeStatus(to.name)
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
  // box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647)

.no-bg
  background-color: transparent
  box-shadow: 0 1px 6px transparent, 0 1px 4px transparent
</style>

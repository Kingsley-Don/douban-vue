<template lang="pug">
.movie-card(
  :style="{ 'background-image': 'url(' + movie.images.large + ')' }",
  @click="toMovieInfo()"
  )
  .card-info()
    .card-title {{ movie.title }}
    .card-score(v-if="movie.rating.average === 0") 暂无评分
    .card-score(v-else) {{ movie.rating.average }}
</template>

<script>
export default {
  name: 'movie-card',
  props: ['movie'],
  methods: {
    toMovieInfo() {
      this.$router.push({
        name: 'movie-info',
        params: { id: this.movie.id }
      })
    }
  }
}
</script>

<style lang="sass">
.movie-card
  background-size: 100%
  background-repeat: no-repeat
  position: relative
  border-radius: 2px

  .card-info
    background-color: rgba(0, 0, 0, 0.6)
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 3.5em
    padding: 0.2em 0.4em

    .card-title
      color: white
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap

    .card-score
      color: orange
</style>

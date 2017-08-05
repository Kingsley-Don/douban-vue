<template lang="pug">
.movie-card.mu-paper(
  :style="{ 'background-image': 'url(' + movie.images.large + ')' }",
  @click="toMovieInfo()"
  )
  .card-info()
    p.card-title {{ movie.title }}
    p.card-score
      | {{ movie.rating.average | rating }}
</template>

<script>
export default {
  name: 'movie-card',
  props: ['movie'],
  methods: {
    toMovieInfo() {
      if (this.movie.id !== 0) {
        this.$router.push({
          name: 'movie-detail',
          params: { id: this.movie.id }
        })
      }
    }
  }
}
</script>

<style lang="sass">
$title-alpha: 0.5
$loading-background: #e7e7e7
$card-radius: 3px

.movie-card
  background-color: $loading-background
  background-size: 100%
  background-repeat: no-repeat
  position: relative
  border-radius: $card-radius

  .card-info
    background-color: rgba(0, 0, 0, $title-alpha)
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

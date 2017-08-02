<template lang="pug">
.movie-list
  movie-card(v-for="(movie, index) in movies", :movie="movie", :key="index")
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  name: 'in-theaters',
  data() {
    return {
      movies: [].fill.call(new Array(12), {
        id: 0,
        title: 'Loading…',
        rating: { average: -1 },
        images: { large: '' }
      })
    }
  },
  mounted() {
    this.$axios
      .get('/api/movie/in_theaters')
      .then(results => {
        this.movies.length = 0
        this.movies.push(...results.data.subjects)
      })
  },
  components: { MovieCard }
}
</script>

<style lang="sass">
$columns: 3
$grid-gap: 4px

.movie-list
  margin-top: 56px + $grid-gap * 0.5
  padding: $grid-gap * 0.5
  display: grid
  grid-template-columns: repeat($columns, 1fr)
  grid-gap: $grid-gap
  .movie-card
    overflow: hidden
    height: calc((100vw / #{$columns} - #{$grid-gap}) * 1.36)
</style>

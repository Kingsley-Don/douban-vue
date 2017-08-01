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
        title: 'loading...',
        rating: { average: '' },
        images: { large: '' }
      })
    }
  },
  mounted() {
    this.$axios
      .get('/api/movie/in_theaters')
      .then(results => {
        this.movies = []
        this.movies.push(...results.data.subjects)
      })
  },
  components: { MovieCard }
}
</script>

<style lang="sass">
$columns: 3
$grid-gap: 5px

.movie-list
  padding: $grid-gap * 0.6
  display: grid
  grid-template-columns: repeat($columns, 1fr)
  grid-gap: $grid-gap
  .movie-card
    overflow: hidden
    height: calc((100vw / #{$columns} - #{$grid-gap}) * 1.38)
</style>

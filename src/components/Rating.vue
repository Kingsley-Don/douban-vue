<template lang="pug">
.rating
  .rating-score {{ this.rating.average | rating }}
  .rating-stars
    mu-icon(
      v-for="(star, index) in stars"
      :value="star"
      :size="18"
      color="orange"
      :key="index"
    )
  .rating-count {{ total }}
</template>

<script>
export default {
  name: 'rating',
  props: {
    rating: {
      type: Object,
      default: {
        average: 0,
        details: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        },
        stars: '00'
      },
      required: true
    }
  },
  data() {
    return {

    }
  },
  computed: {
    stars() {
      let stars = []
      while (stars.length < this.rating.stars[0]) {
        stars.push('star')
      }
      if (this.rating.stars[1] === '5') {
        stars.push('star_half')
      }
      while (stars.length < 5) {
        stars.push('star_border')
      }
      return stars
    },
    total() {
      let total = 0
      let obj = this.rating.details
      for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          total += obj[prop]
        }
      }
      return total
    }
  },
  methods: {

  },
}
</script>

<style lang="sass">
</style>

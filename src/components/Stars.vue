<template lang="pug">
.stars
  mu-icon(
    v-for="(star, index) in computedStars"
    :value="star"
    :key="index"
  )
</template>

<script>
export default {
  name: 'stars',
  props: {
    stars: {
      type: String,
      default: '00',
      required: true
    }
  },
  computed: {
    computedStars() {
      let stars = []
      while (stars.length < this.stars[0]) {
        stars.unshift('star')
      }
      if (this.stars[1] === '5') {
        stars.push('star_half')
      }
      while (stars.length < 5) {
        stars.push('star_border')
      }
      return stars
    }
  }
}
</script>

<style lang="sass">
.stars
  font-size: 0
  i
    color: $star-color
    font-size: 16px
    line-height: 1
</style>

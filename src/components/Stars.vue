<template lang="pug">
.stars
  mu-icon(
    v-for="(star, index) in computedStars"
    value="star"
    :key="index"
    :class="star"
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
      let length = this.stars[1] === '5' ? 6 : 5
      while (stars.length < this.stars[0]) {
        stars.unshift('yellow')
      }
      if (this.stars[1] === '5') {
        stars.push('yellow half')
        stars.push('grey half')
      }
      while (stars.length < length) {
        stars.push('grey')
      }
      return stars
    }
  }
}
</script>

<style lang="sass">
$star-size: 16px
.stars
  font-size: 0
  i
    color: $star-color
    font-size: $star-size
    line-height: 1
    &.grey
      color: #666
    &.half
      width: $star-size / 2
      overflow: hidden
      &.grey
        transform: rotateY(180deg)
</style>

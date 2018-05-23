<template lang="pug">
.stars(:style="{ width: `${5 * size}px` }")
  mu-icon(
    v-for="(star, index) in computedStars"
    value="star"
    :key="index"
    :class="star"
    :style="{ fontSize: `${size}px` }"
  )
</template>

<script>
export default {
  name: 'stars',
  props: {
    stars: {
      type: String,
      default: '00',
      required: true,
    },
    size: {
      type: Number,
      default: 16,
      required: false,
    },
  },
  computed: {
    computedStars() {
      const stars = [];
      const length = this.stars[1] === '5' ? 6 : 5;
      while (stars.length < this.stars[0]) {
        stars.unshift('yellow');
      }
      if (this.stars[1] === '5') {
        stars.push('yellow half');
        stars.push('grey half');
      }
      while (stars.length < length) {
        stars.push('grey');
      }
      return stars;
    },
  },
};
</script>

<style lang="sass">
.stars
  font-size: 0
  vertical-align: bottom
  i
    color: $star-color
    &.grey
      color: #666
    &.half
      width: calc(100% / 10)
      overflow: hidden
      &.grey
        transform: rotateY(180deg)
</style>

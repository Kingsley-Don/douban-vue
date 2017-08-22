<template lang="pug">
.rating
  .rating-score
    .inline-block {{ this.rating.average | rating }}
  .rating-middle
    .inline-block
      .rating-stars
        mu-icon(
          v-for="(star, index) in stars"
          :value="star"
          :key="index"
        )
      .rating-count {{ count | mili }}
        | 
        mu-icon(value="people")
  .rating-details
    .detail(
      v-for="(detail, index) in details"
      :style="{ 'width': `${parseInt(detail / maxDetail * 100)}%` }"
    )
</template>

<script>
export default {
  name: 'rating',
  props: {
    rating: {
      type: Object,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    stars() {
      let stars = []
      while (stars.length < this.rating.stars[0]) {
        stars.unshift('star')
      }
      if (this.rating.stars[1] === '5') {
        stars.push('star_half')
      }
      while (stars.length < 5) {
        stars.push('star_border')
      }
      return stars
    },
    details() {
      let details = []
      for (let i = 5; i > 0; i--) {
        details.push(this.rating.details[i])
      }
      return details
    },
    maxDetail() {
      return Math.max(...this.details)
    }
  },
}
</script>

<style lang="sass">
$score-font-size: 50px
$detail-colors: #43a047 #8bc34a #fff176 #ffb74d #ff5722

.inline-block
  display: inline-block

.rating
  display: flex
  align-items: baseline
  .rating-score
    font:
      size: $score-font-size
      weight: lighter
    line-height: 1
  .rating-middle
    margin-left: 5px
    .rating-stars
      font-size: 0
      i
        color: $star-color
        font-size: 16px
        line-height: 1
    .rating-count
      font-size: 12px
      i
        vertical-align: text-top
        font-size: 13px

  .rating-details
    flex: 1
    margin-left: 20px
    align-self: center
    .detail
      height: $score-font-size * 0.75 / 5
      min-width: 1px
      @for $i from 1 through length($detail-colors)
        $color: nth($detail-colors, $i)
        &:nth-child(#{$i})
          background-color: $color
</style>

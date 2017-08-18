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
      .rating-count {{ total + ' ' }}
        mu-icon(value="people")
  .rating-details
      .detail(
        v-for="detail in details"
        :style="{ 'width': `${parseInt(detail / maxDetail * 100)}%` }"
      )
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
    },
    total() {
      return this.details.reduce((sum, value) => sum + value, 0)
    }
  },
  methods: {

  },
}
</script>

<style lang="sass">
$score-font-size: 50px

.inline-block
  display: inline-block

.rating
  display: flex
  align-items: baseline
  .rating-score
    font-size: $score-font-size
    line-height: 1
    font-weight: lighter
  .rating-middle
    margin-left: 5px
    .rating-stars
      font-size: 0
      i
        color: rgb(233, 176, 78)
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
      &:nth-child(1)
        background-color: #43a047
      &:nth-child(2)
        background-color: #8bc34a
      &:nth-child(3)
        background-color: #fff176
      &:nth-child(4)
        background-color: #ffb74d
      &:nth-child(5)
        background-color: #ff5722

</style>

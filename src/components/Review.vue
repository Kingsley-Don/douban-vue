<template lang="pug">
.review(@click="routeToReview")
  .review-title {{ review.title }}
  .review-author
    Stars.review-stars(:stars="review.rating.value + '0'" :size="12")
    .author-name {{ review.author.name }}
  .review-summary {{ review.summary }}
</template>

<script>
import Stars from '@/components/Stars'

export default {
  name: 'review',
  props: ['review'],
  components: {
    Stars
  },
  methods: {
    routeToReview() {
      this.$router.push({
        name: 'review',
        params: {}
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.review
  position: relative
  &:active::after
    content: ''
    position: absolute
    $over: -10px
    top: $over
    left: $over
    right: $over
    bottom: $over
    background-color: #ccc
    opacity: 0.2
  .review-title
    line-height: 1.2
    font-size: 16px
  .review-author
    font-size: 0
    padding: 5px 0
    .author-name
      font-size: 12px
      margin-left: 5px
      line-height: 1
      display: inline-block
    .review-stars
      display: inline-block
  .review-summary
    font-size: 12px
    color: $text-color
</style>

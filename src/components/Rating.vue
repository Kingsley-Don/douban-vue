<template lang="pug">
.rating
  .rating-score
    .inline-block {{ this.rating.average | rating }}
  .rating-middle
    .inline-block
      stars.rating-stars(:stars="rating.stars")
      .rating-count {{ count | mili }}&nbsp;
        mu-icon(value="people")
  .rating-details
    .detail(
      v-for="(detail, index) in details"
      :style="{ 'width': `${parseInt(detail / maxDetail * 100)}%` }"
    )
</template>

<script>
import Stars from '@/components/Stars';

export default {
  name: 'rating',
  props: {
    rating: {
      type: Object,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  computed: {
    details() {
      const details = [];
      for (let i = 5; i > 0; i -= 1) {
        details.push(this.rating.details[i]);
      }
      return details;
    },
    maxDetail() {
      return Math.max(...this.details);
    },
  },
  components: {
    Stars,
  },
};
</script>

<style lang="sass" scoped>
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
    .rating-count
      font-size: 12px
      i
        font-size: 13px
        line-height: 18px

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

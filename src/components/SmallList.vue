<template lang="pug">
.small-list
  small-card.animated.fadeInUp(
    v-for="(subject, index) in subjects"
    :style="{ 'animation-delay': parseInt(index % 18 / 3) * 0.07 + 's' }"
    :subject="subject"
    :key="index"
  )
</template>

<script>
import SmallCard from '@/components/SmallCard'

export default {
  name: 'small-list',
  props: {
    subjects: {
      type: Array,
      default: [],
      required: true
    },
  },
  components: { SmallCard }
}
</script>

<style lang="sass">
$columns: 3
$grid-gap: 10px

.small-list
  width: 100%
  margin-top: 56px
  padding: $grid-gap
  display: grid
  grid-template-columns: repeat($columns, 1fr)
  grid-gap: $grid-gap
  .small-card
    animation-duration: 0.3s
    .card-poster
      height: calc((100vw - 40px) / 3 * 1.35)
</style>

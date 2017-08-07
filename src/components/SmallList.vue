<template lang="pug">
.small-list
  small-card(v-for="(subject, index) in subjects", :subject="subject", :key="index")
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
    }
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
    .card-poster
      height: calc((100vw / #{$columns} - #{$grid-gap}) * 1.36)
</style>

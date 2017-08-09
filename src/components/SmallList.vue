<template lang="pug">
.small-list-infinite
  .small-list
    small-card.animated.fadeInUp(
      v-for="(subject, index) in subjects"
      :style="{ 'animation-delay': 0.2 + parseInt(index % 18 / 3) * 0.07 + 's' }"
      :subject="subject"
      :date="date"
      :key="index"
    )
  mu-infinite-scroll(
    :scroller="scroller"
    :loading="loading"
    :isLoaded="isLoaded"
    loadingText="正在加载"
    @load="load"
  )
</template>

<script>
import SmallCard from '@/components/SmallCard'

export default {
  name: 'small-list',
  data() {
    return {
      scroller: null,
    }
  },
  props: {
    subjects: {
      type: Array,
      default: [],
      required: true
    },
    date: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    isLoaded: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    load() {
      this.$emit('load')
    }
  },
  components: {
    SmallCard
  },
  mounted() {
    this.scroller = this.$el
  }
}
</script>

<style lang="sass">
$columns: 3
$grid-gap: 10px

.small-list-infinite
  padding-top: 56px
  width: 100vw
  height: 100vh
  overflow: auto

.small-list
  padding: $grid-gap
  display: grid
  grid-template-columns: repeat($columns, 1fr)
  grid-gap: $grid-gap
  .small-card
    animation-duration: 0.3s
    .card-poster
      height: calc((100vw - 40px) / 3 * 1.35)
</style>

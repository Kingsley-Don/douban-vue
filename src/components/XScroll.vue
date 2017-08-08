<template lang="pug">
.x-scroll
  .header
    .title {{ title }}
    router-link(:to="{ name: 'in-theaters' }")
      .more 更多
  .scroll-wrapper(ref="wrapper")
    .scroll-cards
      small-card(
        v-for="(subject, index) in subjects"
        :subject="subject"
        :key="index"
      )
</template>

<script>
import SmallCard from '@/components/SmallCard'
import BScroll from 'better-scroll'

export default {
  name: 'x-scroll',
  props: {
    title: String,
    subjects: {
      type: Array,
      default: []
    }
  },
  components: {
    SmallCard
  },
  methods: {
    updateScroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            scrollY: false,
            scrollX: true,
            bounce: false,
            deceleration: 0.0015,
            preventDefault: false,
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  },
  watch: {
    subjects: 'updateScroll'
  },
  mounted() {
    this.updateScroll()
  }
}
</script>

<style lang="sass">
$title-font-size: 22px
$card-width: 29vw
$card-margin: 7px
$left: 15px

.header
  display: flex
  padding: 10px $left
  .title
    flex: 1
    font-size: 22px
  .more
    line-height: $title-font-size * 1.5

.scroll-wrapper
  .scroll-cards
    padding-left: $left
    // display: flex
    width: calc((#{$card-width} + #{$card-margin}) * 12 + #{$left})
    .small-card
      // flex-shrink: 0
      display: inline-block
      width: $card-width
      margin-right: $card-margin
      .card-poster
        height: $card-width * 1.35
</style>

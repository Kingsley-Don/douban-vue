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
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: false
      })
    }
  },
  watch: {
    subjects: function () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.initScroll()
        } else {
          this.scroll.refresh()
        }
      })
    }
  },
}
</script>

<style lang="sass">
$title-font-size: 22px
$poster-width: 25vw

.header
  display: flex
  padding: 10px 20px
  .title
    flex: 1
    font-size: 22px
  .more
    line-height: $title-font-size * 1.5

.scroll-cards
  display: flex
  .small-card
    flex-shrink: 0
    width: $poster-width
    margin: 0 5px
    .card-poster
      height: $poster-width * 1.35
</style>

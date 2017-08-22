<template lang="pug">
mu-paper
  .header
    .title {{ title }}
    router-link(:to="{ name: listName }") 更多
  .scroll-wrapper(ref="wrapper")
    .scroll-small-cards
      small-card.scroll-small-card(
        v-for="(subject, index) in subjects"
        :subject="subject"
        :key="index"
        :showDate="showDate"
      )
</template>

<script>
import SmallCard from '@/components/SmallCard'

export default {
  name: 'x-scroll',
  props: {
    title: String,
    listName: String,
    subjects: {
      type: Array,
      default: []
    }
  },
  computed: {
    showDate() {
      return this.listName === 'comingSoon'
    }
  },
  components: {
    SmallCard
  },
}
</script>

<style lang="sass">
$card-width: 25vw

.header
  display: flex
  align-items: center
  padding: $gap
  .title
    flex: 1
    font-size: 16px
    line-height: 1

.scroll-wrapper
  overflow-x: scroll
  overflow-y: hidden
  &::-webkit-scrollbar
    display: none
  .scroll-small-cards
    padding: 0 $gap
    white-space: nowrap
    width: fit-content
    font-size: 0
    .scroll-small-card
      display: inline-block
      width: $card-width
      margin-right: $gap
      &:last-child
        margin-right: 0
</style>

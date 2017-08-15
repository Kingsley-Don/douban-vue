<template lang="pug">
.x-scroll
  .header
    .title {{ title }}
    router-link(:to="{ name: listName }")
      .more 更多
  .scroll-wrapper(ref="wrapper")
    .scroll-small-cards
      small-card(
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
      if (this.listName === 'comingSoon') {
        return true
      }
      return false
    }
  },
  components: {
    SmallCard
  },
}
</script>

<style lang="sass">
$title-font-size: 22px
$card-width: 110px
$card-margin: 7px
$page-padding: 15px

.header
  display: flex
  padding: 15px $page-padding

  .title
    flex: 1
    font-size: 22px

  .more
    line-height: $title-font-size * 1.5

.scroll-wrapper
  overflow-x: scroll
  overflow-y: hidden
  width: 100%
  &::-webkit-scrollbar
    display: none

  .scroll-small-cards
    padding: 0 $page-padding
    white-space: nowrap
    width: fit-content
    font-size: 0

    .small-card
      display: inline-block
      width: $card-width
      margin-right: $card-margin
      &:last-child
        margin-right: 0

      .card-poster
        height: $card-width * 1.35
</style>

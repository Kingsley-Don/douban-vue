<template lang="pug">
.page.home-page
  mu-drawer(
    :open="drawerOpen"
    @close="toggleDrawer"
    :docked="false"
  )
  AppBar(
    title="？？？"
    icon="menu"
    @toggle="toggleDrawer"
  )
  .chips-wrapper
    .chips
      mu-chip.chip 豆瓣新片榜
      mu-chip.chip 本周口碑榜
      mu-chip.chip 北美票房榜
      mu-chip.chip 豆瓣电影 TOP250
  x-scroll.scroll(
    title="正在热映"
    listName="inTheaters"
    :subjects="inTheaters.subjects"
  )
  x-scroll.scroll(
    title="即将上映"
    listName="comingSoon"
    :subjects="comingSoon.subjects"
  )
</template>

<script>
import { mapState } from 'vuex'
import * as types from '@/store/types'
import AppBar from '@/components/AppBar'
import XScroll from '@/components/XScroll'

export default {
  name: 'home',
  data () {
    return {
      drawerOpen: false
    }
  },
  computed: {
    inTheaters() {
      return {
        name: 'inTheaters',
        subjects: this.$store.state.lists.inTheaters.subjects.slice(0, 12),
        count: this.$store.state.lists.inTheaters.count
      }
    },
    comingSoon() {
      return {
        name: 'comingSoon',
        subjects: this.$store.state.lists.comingSoon.subjects.slice(0, 12),
        count: this.$store.state.lists.comingSoon.count
      }
    }
  },
  methods: {
    updateList(list) {
      if (list.count === 0){
        this.$store.dispatch(types.GET_SUBJECTS, {
          name: list.name,
          start: list.count,
          count: 18
        })
      }
    },
    toggleDrawer() {
      this.drawerOpen ? this.drawerOpen = false : this.drawerOpen = true
    }
  },
  components: {
    AppBar,
    XScroll
  },
  created() {
    this.updateList(this.inTheaters)
    this.updateList(this.comingSoon)
  }
}
</script>

<style lang="sass">
$scroll-margin: 8px
$chip-colors: #e53935 #ff7043 #1565c0 #512da8

.scroll
  margin:
    top: $scroll-margin
    left: $scroll-margin
    right: $scroll-margin

.chips-wrapper
  margin-top: $scroll-margin
  padding: $scroll-margin 0
  overflow-x: scroll
  overflow-y: hidden
  &::-webkit-scrollbar
    display: none
  .chips
    padding: 0 $scroll-margin
    width: fit-content
    white-space: nowrap
    .mu-chip
      &:not(:last-child)
        margin-right: 12px
      @for $i from 1 through length($chip-colors)
        $color: nth($chip-colors, $i)
        &:nth-child(#{$i})
          background-color: $color
</style>

<template lang="pug">
.page
  AppBar(
    :title="title"
  )
  .small-list
    small-card(
      v-for="(subject, index) in subjects"
      :subject="subject"
      :showDate="showDate"
      :key="index"
    )
  mu-infinite-scroll(
    :scroller="scroller"
    :loading="loading"
    :isLoaded="isLoaded"
    loadingText="正在加载"
    @load="loadMore"
  )
</template>

<script>
import AppBar from '@/components/AppBar'
import SmallCard from '@/components/SmallCard'
import { mapState } from 'vuex'
import * as types from '@/store/types'

export default {
  name: 'small-list',
  data() {
    return {
      scroller: null,
      loading: false,
      isLoaded: false,
      listName: this.$route.name
    }
  },
  computed: {
    showDate() {
      if (this.listName === 'comingSoon') {
        return true
      }
      return false
    },
    title() {
      if (this.listName === 'comingSoon') {
        return '即将上映'
      } else if (this.listName === 'inTheaters') {
        return '正在热映'
      }
    },
    ...mapState({
      subjects (state) {
        return state.lists[this.listName].subjects
      },
      count (state) {
        return state.lists[this.listName].count
      },
      total (state) {
        return state.lists[this.listName].total
      }
    })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$store.dispatch(types.GET_SUBJECTS, {
        name: this.listName,
        start: this.count,
        count: 18
      })
    },
    checkLoaded() {
      if (this.total !== 0 && this.count === this.total) {
        this.isLoaded = true
      }
    }
  },
  watch: {
    subjects: function () {
      this.checkLoaded()
      this.loading = false
    }
  },
  components: {
    AppBar,
    SmallCard
  },
  created() {
    if (this.count === 0) {
      this.loadMore()
    }
    this.checkLoaded()
  },
  mounted() {
    this.scroller = this.$el
  }
}
</script>

<style lang="sass">
$columns: 3
$grid-gap: 10px

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

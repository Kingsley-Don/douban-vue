<template lang="pug">
.discussion-wrapper
  .review-list
    Review(
      v-for="(review, index) in reviews"
      :review="review"
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
import Review from '@/components/Review'
import * as api from '@/api/api'
export default {
  data () {
    return {
      reviews: [],
      scroller: null,
      loading: false,
      isLoaded: false,
      total: 0,
      count: 0
    }
  },
  components: {
    Review
  },
  methods: {
    loadMore() {
      this.loading = true
      api.getReviews(this.$route.params.id, this.count, 20)
        .then(res => {
          this.reviews.push(...res.reviews)
          this.total = res.total
          if (res.total = 0) {
            this.loading = false
            this.isLoaded = true
          }
        })
    },
    checkLoaded() {
      if (this.total !== 0 && this.count === this.total) {
        this.isLoaded = true
      }
    }
  },
  watch: {
    reviews: function (val, oldVal) {
      this.count = val.length
      this.checkLoaded()
      this.loading = false
    }
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
.discussion-wrapper
  .review-card
    margin: 20px
    margin-top: 0
</style>

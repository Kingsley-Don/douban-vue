<template lang="pug">
.discussion-wrapper
  .comment-list
    Comment(
      v-for="(comment, index) in comments"
      :comment="comment"
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
import Comment from '@/components/Comment'
import * as api from '@/api/api'
export default {
  data () {
    return {
      comments: [],
      scroller: null,
      loading: false,
      isLoaded: false,
      total: 0,
      count: 0
    }
  },
  components: {
    Comment
  },
  methods: {
    loadMore() {
      this.loading = true
      api.getComments(this.$route.params.id, this.count, 20)
        .then(res => {
          this.comments.push(...res.comments)
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
    comments: function (val, oldVal) {
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
  overflow-x: hidden
  overflow-y: auto
  position: absolute
  top: 104px
  left: 0
  right: 0
  bottom: 0
  .comment
    margin: 30px 20px
    margin-bottom: 0
</style>

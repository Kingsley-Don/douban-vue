<template lang="pug">
.page#discussion
  header
    AppBar.discussion-bar(:title="title")
    mu-tabs(:value="activeTab" @change="handleTabChange")
      mu-tab(value="comments" title="短评")
      mu-tab(value="reviews" title="影评")
  keep-alive
    router-view
</template>

<script>
import AppBar from '@/components/AppBar'
import * as api from '@/api/api'
export default {
  data () {
    return {
      activeTab: 'comments',
      title: ''
    }
  },
  components: {
    AppBar
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val
    },
    getTitle() {
      api.getSubject(this.$route.params.id)
        .then(res => {
          this.title = res.title
        })
    }
  },
  created() {
    if (!!this.$route.params.title) {
      this.title = this.$route.params.title
    } else {
      this.getTitle()
    }
  }
}
</script>

<style lang="sass">
#discussion
  padding-top: 56px + 48px
  overflow: hidden
  header
    position: fixed
    top: 0
    left: 0
    right: 0
  .discussion-bar
    position: relative
  .mu-tabs
    background-color: #222
    .mu-tab-text
      color: white
</style>

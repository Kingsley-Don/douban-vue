<template lang="pug">
.page.discussion-page
  header
    AppBar.discussion-bar(:title="title")
    mu-tabs(:value="activeTab" @change="handleTabChange")
      mu-tab(value="comments" title="短评")
      mu-tab(value="reviews" title="影评")
  transition(:name="transition")
    keep-alive
      router-view
</template>

<script>
import AppBar from '@/components/AppBar'
import * as api from '@/api/api'
export default {
  data () {
    return {
      title: '',
      transition: 'left'
    }
  },
  components: {
    AppBar
  },
  computed: {
    activeTab() {
      return this.$route.name
    }
  },
  methods: {
    handleTabChange(val) {
      this.$router.replace({
        name: val,
        params: {
          id: this.$route.params.id,
          title: this.title
        }
      })
    },
    getTitle() {
      api.getSubject(this.$route.params.id)
        .then(res => {
          this.title = res.title
        })
    }
  },
  watch: {
    '$route'(to, from) {
      if (from.name === 'comments') {
        this.transition = 'left'
      } else {
        this.transition = 'right'
      }
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
.left-enter, .right-leave-to
  transform: translateX(100vw)

.left-enter-to, .right-leave
  transform: translateX(0)

.left-leave, .right-enter-to
  transform: translateX(0)

.left-leave-to, .right-enter
  transform: translateX(-100vw)

.left-enter-to,
.left-leave-to,
.right-enter-to,
.right-leave-to
  transition-duration: 0.2s


.discussion-page
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

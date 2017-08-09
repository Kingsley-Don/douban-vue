<template lang="pug">
#comingSoon
  small-list(
    :subjects="subjects"
    :date="true"
    :loading="loading"
    @load="updateList"
  )
</template>

<script>
import SmallList from '@/components/SmallList'
import { mapState } from 'vuex'
import * as types from '@/store/types'

export default {
  data() {
    return {
      listName: 'comingSoon',
      loading: false
    }
  },
  computed: mapState({
    subjects: state => state.lists.comingSoon.subjects,
    count: state => state.lists.comingSoon.count,
    total: state => state.lists.comingSoon.total
  }),
  methods: {
    updateList() {
      if (this.total === 0 || this.count < this.total) {
        this.loading = true
        this.$store.dispatch(types.GET_MOVIES, {
          name: this.listName,
          start: this.count,
          count: 18
        })
      }
    }
  },
  watch: {
    subjects: function () {
      this.loading = false
    }
  },
  components: {
    SmallList
  },
  created() {
    if (this.count === 0) {
      this.updateList()
    }
  }
}
</script>

<style lang="sass">
.list-loading
  position: absolute
  top: 50%
  left: 50%
  margin: -40px 0 0 -40px
</style>

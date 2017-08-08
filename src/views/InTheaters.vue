<template lang="pug">
#in-theaters
  mu-circular-progress.list-loading(
    v-if="this.count === 0"
    :size="80"
    :strokeWidth="8")
  small-list(v-else :subjects="subjects")
</template>

<script>
import SmallList from '@/components/SmallList'
import { mapState } from 'vuex'
import * as types from '@/store/types'

export default {
  data() {
    return {
      listName: 'inTheaters'
    }
  },
  computed: mapState({
    subjects: state => state.lists.inTheaters.subjects,
    count: state => state.lists.inTheaters.count
  }),
  methods: {
    updateList() {
      if (this.count === 0){
        this.$store.dispatch(types.GET_MOVIES, {
          name: this.listName,
          start: this.count,
          count: 18
        })
      }
    }
  },
  components: {
    SmallList
  },
  created() {
    this.updateList()
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

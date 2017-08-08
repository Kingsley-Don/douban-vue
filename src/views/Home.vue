<template lang="pug">
#movie-home
  x-scroll(
    title="正在热映"
    :subjects="inTheaters.subjects"
  )
  //- x-scroll(
  //-   title="即将上映"
  //-   :subjects="comingSoon.subjects"
  //- )
</template>

<script>
import { mapState } from 'vuex'
import * as types from '@/store/types'
import XScroll from '@/components/XScroll'

export default {
  computed: {
    inTheaters() {
      return {
        name: 'inTheaters',
        subjects: this.$store.state.lists.inTheaters.subjects.slice(0, 10),
        count: this.$store.state.lists.inTheaters.count
      }
    },
    comingSoon() {
      return {
        name: 'comingSoon',
        subjects: this.$store.state.lists.comingSoon.subjects.slice(0, 10),
        count: this.$store.state.lists.comingSoon.count
      }
    }
  },
  methods: {
    updateList(list) {
      if (list.count === 0){
        this.$store.dispatch(types.GET_MOVIES, {
          name: list.name,
          start: list.count,
          count: 18
        })
      }
    }
  },
  components: {
    XScroll
  },
  created() {
    this.updateList(this.inTheaters)
    this.updateList(this.comingSoon)
  }
}
</script>

<style lang="sass">
#movie-home
  margin-top: 56px
</style>

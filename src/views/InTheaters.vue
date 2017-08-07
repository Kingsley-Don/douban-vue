<template lang="pug">
#in-theaters
  small-list(:subjects="subjects")
</template>

<script>
import SmallList from '@/components/SmallList'
import * as types from '@/store/mutation-types'

export default {
  data() {
    return {
      listName: 'inTheaters'
    }
  },
  computed: {
    subjects() {
      return this.$store.state.lists.inTheaters.subjects
    }
  },
  methods: {
    updateList() {

    }
  },
  components: {
    SmallList
  }
}
</script>

<style lang="sass">
</style>

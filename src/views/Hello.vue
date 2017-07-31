<template lang="pug">
  .hello
    h1 {{ msg }} id: {{ $route.params.id }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello',
    }
  },
  mounted() {
    axios.get('/api/movie/subject/' + this.$route.params.id)
      .then(result => {
        this.msg = result.data.title
        // console.log(result)
      })
  },
}
</script>

<style scoped lang="sass">
h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>

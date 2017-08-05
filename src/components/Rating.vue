<template lang="pug">
#rating
  mu-icon(v-for="(s, index) in stars", :value="s", :color="color", :key="index")
</template>

<script>
export default {
  name: 'star-rate',
  props: { starsData: { required: true } },
  data() {
    return {
      stars: [].fill.call(new Array(5), 'star_border'),
      color: 'orange',
    }
  },
  methods: {
    computeStar() {
      // this.stars.fill('star_border')
      if (this.starsData === "00") {
        this.color = 'grey'
      } else {
        this.color = 'orange'
        let full = parseInt(this.starsData[0])
        for (let i = 0; i < full; i++) { this.stars[i] = 'star' }
        if (this.starsData[1] === '5' && full < 5) { this.stars[full] = 'star_half' }
      }
    }
  },
  mounted() {
    this.computeStar()
  },
  beforeUpdate() {
    this.computeStar()
  },
}
</script>

<style lang="sass">
</style>

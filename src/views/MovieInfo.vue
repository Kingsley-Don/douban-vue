<template lang="pug">
#movie-info
  .movie-photos
    img(v-for="photo in photos", :src="photo")
</template>

<script>
export default {
  data() {
    return {
      movie: {},
      photos: []
    }
  },
  methods: {
    getInfo() {
      this.$axios
        .get('/api/movie/subject/' + this.$route.params.id)
        .then(info => { this.movie = info.data })
    },
    getPhotos() {
      let bird = 'https://bird.ioliu.cn/v1/?url='
      let img = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='
      this.$axios
        .get(bird + 'https://movie.douban.com/subject/' + this.$route.params.id + '/photos')
        .then(a => {
          let url = /https:\/\/img\d\.doubanio\.com\/view\/photo\/thumb\/public\/p\d{1,10}\.\w+/g
          // console.log(a.data)
          let tmp = a.data.match(url).slice(0, 5)
          for (let i = 0; i < tmp.length; i++) {
            tmp[i] = img + tmp[i].replace('thumb', 'photo')
          }
          this.photos.push(...tmp)
        })
    }
  },
  mounted() {
    this.getInfo(),
    this.getPhotos()
  }
}
</script>

<style lang="sass">
.movie-photos

</style>

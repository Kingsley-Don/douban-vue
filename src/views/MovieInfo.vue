<template lang="pug">
#movie-info
  swiper.movie-photos(:options="swiperOption")
    swiper-slide(v-for="(photo, index) in photos", :key="index")
      img.movie-photo(:src="photo")
    .swiper-pagination(slot="pagination")
</template>

<script>
export default {
  name: 'movie-info',
  data() {
    return {
      movie: {},
      photos: [],
      swiperOption: {
        autoplay: 5000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
      },
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
          let tmp = a.data.match(url).slice(0, 5)
          for (let i = 0; i < tmp.length; i++) {
            tmp[i] = img + tmp[i].replace('thumb', 'photo')
          }
          this.photos = []
          this.photos.push(...tmp)
        })
    }
  },
  mounted() {
    this.getInfo()
    this.getPhotos()
  },
}
</script>

<style lang="sass">
.movie-photos
  // position: absolute
  // top: 0
  // left: 0
  // height: 1vw
  background-color: rgb(1, 173, 221)
  overflow: hidden
  .movie-photo
    width: 100%
</style>

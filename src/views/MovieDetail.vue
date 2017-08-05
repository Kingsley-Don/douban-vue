<template lang="pug">
#movie-info
  .no-photos(v-if="!hasPhotos") 暂无剧照
  swiper.movie-photos(v-else, :options="swiperOption")
    swiper-slide.movie-photo(
      v-for="(photo, index) in movie.photos",
      :key="index",
      :style="{ 'background-image': 'url(' + imgUrl + photo.image + ')' }")
    .swiper-pagination(slot="pagination")

  .movie-content-box
    .movie-basic
      .movie-image
        img(:src="movie.images.large", :alt="movie.title")
      .movie-title-info
        p.main-title
          b {{ movie.title }}
        p(v-if="movie.title !== movie.original_title && movie.original_title !== ''")
          | {{ movie.original_title }}
        p
          | {{ movie.year + '   ' + movie.countries.join(' / ') }}
          br
          | {{ movie.durations.join(' / ') + '   ' + movie.genres.join(' / ') }}

    .movie-data
      .movie-rate
        .movie-score(:class=" { 'no-score': movie.rating.average === 0 } ")
          | {{ movie.rating.average | rating }}
        star-rate.movie-star(:starsData="movie.rating.stars")

      .movie-wish.movie-number-box
        p.movie-number.movie-wish-number
          | {{ movie.wish_count | formatNumber }}
        p.movie-number-note.movie-wish-note
          | 想看人数

      .movie-collect.movie-number-box
        p.movie-number.movie-collect-number
          | {{ movie.collect_count | formatNumber }}
        p.movie-number-note.movie-collect-note
          | 看过人数

    .movie-summary
      p {{ movie.summary }}
</template>

<script>
import StarRate from '@/components/StarRate'

export default {
  name: 'movie-info',
  data() {
    return {
      movie: {
        title: '标题',
        original_title: '',
        images: { large: '' },
        year: '未知年份',
        countries: ['未知国家'],
        genres: ['未知类型'],
        rating: {
          average: 0,
          stars: '00',
        },
        wish_count: 0,
        collect_count: 0,
        durations: ['未知时长']
      },
      imgUrl: 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=',
      swiperOption: {
        loop: true,
        loopedSlides: 10,
        speed: 400,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
      },
      hasPhotos: true
    }
  },
  components: { StarRate },
  methods: {
    getMovie() {
      this.$axios
        .get('/api/movie/subject/' + this.$route.params.id)
        .then(response => { this.$_.merge(this.movie, response.data) })
    }
    // getPhotos() {
    //   let bird  = 'https://bird.ioliu.cn/v1/?url=',
    //       img   = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='
    //       // img  = 'http://47.93.224.150:8080/img?url='
    //   this.$axios
    //     .get(bird + 'https://movie.douban.com/subject/' + this.$route.params.id + '/photos')
    //     .then(response => {
    //       const url = /https:\/\/img\d\.doubanio\.com\/view\/photo\/thumb\/public\/p\d{1,10}\.\w+/g
    //       if (response.data.match(url) !== null) {
    //         let tmp = response.data.match(url).slice(0, 5).map(a => img + a.replace('thumb', 'photo'))
    //         this.photos.length = 0
    //         this.photos.push(...tmp)
    //       } else {
    //         this.hasPhotos = false
    //       }
    //     })
    // }
  },
  beforeMount() {
    this.getMovie()
  }
}
</script>

<style lang="sass">
$photo-height: 52vw
$poster-width: 110px
$basic-to-top: 20px
$slide-margin: 20px
$data-border: 1px solid #ddd

.no-photos
  text-align: center
  background-color: grey
  width: 100%
  font-size: 30px
  color: white
  line-height: $photo-height
  height: $photo-height
  position: relative
  z-index: 1


.movie-photos
  height: $photo-height
  .movie-photo
    box-shadow: inset 0 110px 100px -100px black
    background-size: cover
    background-repeat: no-repeat
    background-position: center

.movie-content-box
  padding: 0 $slide-margin
  background-color: #fff
  position: relative
  z-index: 99

.movie-basic

  display: flex
  .movie-image
    margin-top: -$basic-to-top
    width: 30vw
    height: calc(30vw * 1.36)
    overflow: hidden
    z-index: 9
    pointer-events: none
    font-size: 0
    img
      width: 100%

  .movie-title-info
    flex: 1
    padding: $slide-margin - 4px 0 0 $slide-margin - 5px
    overflow: hidden
    p.main-title
      font-size: 22px
      color: #222
      padding-bottom: 4px
      line-height: 1.4
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
    p
      text-overflow: ellipsis
      white-space: pre
      font-size: 14px
      color: #666

.movie-data
  border-top: $data-border
  border-bottom: $data-border
  margin: $slide-margin + 5px 0
  display: flex
  padding: $slide-margin 0
  .movie-rate
    flex: 1
    .movie-score
      text-align: center
      color: orange
      font-size: 35px
      // padding-bottom: 6px
      line-height: 44px
      &.no-score
        color: grey
        font-size: 18px
        // line-height: 22px
    .movie-star
      text-align: center
      height: 16px
      i
        font-size: 16px

  .movie-number-box
    flex: 1
    text-align: center
    color: #666
    .movie-number
      font-size: 30px
      line-height: 44px
    .movie-number-note
      font-size: 12px
      line-height: 16px

.movie-summary
  padding: 0 $slide-margin
  text-align: justify
  font-size: 15px
</style>

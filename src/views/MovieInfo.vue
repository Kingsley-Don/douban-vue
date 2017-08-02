<template lang="pug">
#movie-info
  swiper.movie-photos(:options="swiperOption")
    swiper-slide.movie-photo(
      v-for="(photo, index) in photos",
      :key="index",
      :style="{ 'background-image': 'url(' + photo + ')' }")
    .swiper-pagination(slot="pagination")
  .movie-content-box
    .movie-basic
      .movie-image
        img(:src="movie.images.large", :alt="movie.title")
      .movie-title-info
        p.main-title
          b {{ movie.title }}
        p
          | {{ movie.year + '   ' + movie.countries.join(' / ') }}
          br
          | {{ more.attrs.movie_duration.join(' / ') + '   ' + movie.genres.join(' / ') }}
    //- .movie-tags
    //-   mu-chip.movie-tag(v-for="(tag, index) in more.tags", :key="index") {{ tag.name }}
    .movie-data
      .movie-rate
        p.movie-score.no-score(v-if="movie.rating.average === 0")
          | 暂无评分
        .movie-score(v-else-if="movie.rating.average > 0")
          | {{ movie.rating.average.toFixed(1) }}
        star-rate.movie-star(:starsData="movie.rating.stars")
      .movie-wish.movie-number-box
        p.movie-number.movie-wish-number {{ movie.wish_count | formatNumber }}
        p.movie-number-note.movie-wish-note 想看人数
      .movie-collect.movie-number-box
        p.movie-number.movie-collect-number {{ movie.collect_count | formatNumber }}
        p.movie-number-note.movie-collect-note 看过人数
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
        title: '',
        images: { large: '' },
        year: '',
        countries: [],
        genres: [],
        rating: {
          stars: '00',
        },
        wish_count: 0,
        collect_count: 0
      },
      more: {
        attrs: {
          movie_duration: []
        }
      },
      photos: [],
      swiperOption: {
        loop: true,
        loopedSlides: 5,
        speed: 400,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
      },
    }
  },
  components: { StarRate },
  methods: {
    getInfo() {
      this.$axios
        .get('/api/movie/subject/' + this.$route.params.id)
        .then(response => { this.movie = response.data })
      this.$axios
        .get('/api/movie/' + this.$route.params.id)
        .then(response => { this.more = response.data })
    },
    getPhotos() {
      let bird  = 'https://bird.ioliu.cn/v1/?url=',
          img   = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='
          // img1  = 'http://47.93.224.150:8080/img?url='
      this.$axios
        .get(bird + 'https://movie.douban.com/subject/' + this.$route.params.id + '/photos')
        .then(response => {
          let url = /https:\/\/img\d\.doubanio\.com\/view\/photo\/thumb\/public\/p\d{1,10}\.\w+/g
          let tmp = response.data.match(url).slice(0, 5).map(a => img + a.replace('thumb', 'photo'))
          this.photos.length = 0
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
$photo-height: 52vw
$poster-width: 110px
$basic-to-top: 20px
$slide-margin: 20px
$data-border: 1px solid #ddd


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
    flex: 4
    overflow: hidden
    z-index: 9
    pointer-events: none
    font-size: 0
    img
      width: 100%

  .movie-title-info
    flex: 9
    padding: $slide-margin - 4px 0 0 $slide-margin - 5px
    p.main-title
      white-space: normal
      font-size: 24px
      color: #222
      padding-bottom: 4px
      line-height: 1.4
    p
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

<template lang="pug">
#movie-info
  .no-photos(v-if="!hasPhotos") 暂无剧照
  swiper.movie-photos(v-else, :options="swiperOption")
    swiper-slide.movie-photo(
      v-for="(photo, index) in movie.photos",
      :key="index",
      :style="{ 'background-image': 'url(' + photo.image + ')' }")
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
          //- | {{ movie.year + '   ' + movie.countries.join(' / ') }}
          br
          | {{ movie.durations.join(' / ') + '   ' + movie.genres.join(' / ') }}

    .movie-data
      rating.movie-star(:starsData="movie.rating.stars")

    .movie-summary
      p {{ movie.summary }}
</template>

<script>
import Rating from '@/components/Rating'

export default {
  name: 'movie-info',

  data() {
    return {
      movie: this.$_.merge(this.$route.params.movie, { photos: [], countries: []}),
      swiperOption: {
        loop: true,
        loopedSlides: 10,
        speed: 400,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
      },
      hasPhotos: false
    }
  },

  components: { Rating },

  methods: {
    getDetail() {
      this.$axios
        .get('/api/movie/subject/' + this.$route.params.id)
        .then(response => {
          // const IMG = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='
          this.$_.merge(this.movie, response.data)
        })
        .catch(error => {
          this.$router.push({
            name: 'error',
            params: { errorCode: error.response.status }
          })
        })
    }
  },

  created() { this.getDetail() }
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
  .swiper-pagination
    text-align: right
    padding-right: 20px
    .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)
      opacity: 0.4
  .movie-photo
    box-shadow: inset 0 110px 100px -100px black
    background-size: cover
    background-repeat: no-repeat
    background-position: center

.movie-content-box
  padding: 0 $slide-margin
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
      padding-bottom: 4px
      line-height: 1.4
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      color: #fff
    p
      color: #ccc
      text-overflow: ellipsis
      white-space: pre
      font-size: 14px

.movie-data
  border-top: $data-border
  border-bottom: $data-border
  margin: $slide-margin + 5px 0
  padding: $slide-margin 0
  // .movie-rate
  //   .movie-score
  //     text-align: center
  //     color: orange
  //     font-size: 35px
  //     // padding-bottom: 6px
  //     line-height: 44px
  //     &.no-score
  //       color: grey
  //       font-size: 18px
  //       // line-height: 22px
  //   .movie-star
  //     text-align: center
  //     height: 16px
  //     i
  //       font-size: 16px

  // .movie-number-box
  //   flex: 1
  //   text-align: center
  //   color: #666
  //   .movie-number
  //     font-size: 30px
  //     line-height: 44px
  //   .movie-number-note
  //     font-size: 12px
  //     line-height: 16px

.movie-summary
  padding: 0 $slide-margin
  text-align: justify
  font-size: 15px
</style>

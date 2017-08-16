<template lang="pug">
.page.subject-page
  AppBar
  #subject
    .subject-photo(
      :style="{ 'background-image': 'url(' + subject.photos[0].image + ')' }"
    )
    .subject-card
      .subject-basic
        .subject-image
          img(:src="subject.images.large", :alt="subject.title")
        .subject-title
          h1
            b {{ subject.title }}
          p(v-if="subject.title !== subject.original_title && subject.original_title")
            | {{ subject.original_title }}
          p
            | {{ subject.year }}
            | {{ subject.countries | arr2string }}
          p
            | {{ subject.durations | arr2string }}
            | {{ subject.genres | arr2string }}

      .subject-data
        rating.subject-star(:starsData="subject.rating.stars")

      .subject-summary
        p {{ subject.summary }}
</template>

<script>
import AppBar from '@/components/AppBar'
import Rating from '@/components/Rating'
import * as api from '@/api/api'
import _ from 'lodash'

export default {
  name: 'subject',
  data() {
    return {
      subject: {
        id: 0,
        title: '',
        original_title: '',
        rating: {
          average: 7.5,
          details: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
          },
          stars: '00'
        },
        images: {
          large: ''
        },
        summary: '',
        photos: [{ image: '' }]
      }
    }
  },
  components: {
    Rating,
    AppBar
  },
  methods: {
    preLoad() {
      if (this.$route.params.subject) {
        _.merge(this.subject, this.$route.params.subject)
      }
    },
    loadMore() {
      api.getSubject(this.$route.params.id)
        .then(res => {
          _.merge(this.subject, res)
        })
    }
  },
  created() {
    this.preLoad()
    this.loadMore()
  }
}
</script>

<style lang="sass">
$photo-height: 52vw
$image-width: 110px
$card-padding: 20px
$data-border: 1px solid #ddd

// .no-photos
//   text-align: center
//   background-color: grey
//   width: 100%
//   font-size: 30px
//   color: white
//   line-height: $photo-height
//   height: $photo-height
//   position: relative
//   z-index: 1

.subject-photo
  height: $photo-height
  box-shadow: inset 0 110px 100px -100px black
  background-color: #888
  background-size: cover
  background-repeat: no-repeat
  background-position: center

.subject-card
  padding: 0 $card-padding
  position: relative
  z-index: 99

.subject-basic
  display: flex
  .subject-image
    margin-top: -10px
    width: $image-width
    height: $image-width * 1.36
    overflow: hidden
    z-index: 9
    pointer-events: none
    font-size: 0
    img
      width: 100%

  .subject-title
    flex: 1
    padding-left: $card-padding - 5px
    overflow: hidden
    h1
      font-size: 22px
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      color: #fff
    p
      color: #ccc
      font-size: 14px

.subject-data
  border-top: $data-border
  border-bottom: $data-border
  margin: $card-padding + 5px 0
  padding: $card-padding 0
  // .subject-rate
  //   .subject-score
  //     text-align: center
  //     color: orange
  //     font-size: 35px
  //     // padding-bottom: 6px
  //     line-height: 44px
  //     &.no-score
  //       color: grey
  //       font-size: 18px
  //       // line-height: 22px
  //   .subject-star
  //     text-align: center
  //     height: 16px
  //     i
  //       font-size: 16px

  // .subject-number-box
  //   flex: 1
  //   text-align: center
  //   color: #666
  //   .subject-number
  //     font-size: 30px
  //     line-height: 44px
  //   .subject-number-note
  //     font-size: 12px
  //     line-height: 16px

.subject-summary
  padding: 0 $card-padding
  text-align: justify
  font-size: 15px
</style>

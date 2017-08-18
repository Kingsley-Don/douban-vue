<template lang="pug">
.page.subject-page
  AppBar
  #subject
    .subject-photo.bg-image(
      :style="photo"
    )
    .subject-card
      .subject-basic
        .subject-image.bg-image(:style="image")
        .subject-title
          h1.text-overflow {{ subject.title }}
          p.text-overflow(v-if="showOriginalTitle")
            | {{ subject.original_title }}
          p {{ subject.year }}  {{ subject.countries | a2s }}
          p {{ subject.durations | a2s }}  {{ subject.genres | a2s }}

      .subject-rating
        rating(:rating="subject.rating")

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
          average: 0,
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
        photos: [
          {
            image: ''
          }
        ]
      }
    }
  },
  components: {
    Rating,
    AppBar
  },
  computed: {
    photo() {
      return {
        backgroundImage: `url(${this.subject.photos[0].image})`
      }
    },
    image() {
      return {
        backgroundImage: `url(${this.subject.images.large})`
      }
    },
    showOriginalTitle() {
      return this.subject.title !== this.subject.original_title
        && this.subject.original_title
    }
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
$data-border: 1px solid #666

.subject-photo
  height: $photo-height
  box-shadow: inset 0 110px 100px -100px black
  background-color: #222

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
    pointer-events: none
  .subject-title
    flex: 1
    padding-left: $card-padding
    overflow: hidden
    h1
      font-size: 22px
      color: #fff
    p
      color: #ccc
      font-size: 14px
      &:not(.text-overflow)
        white-space: pre-wrap

.subject-rating
  border-top: $data-border
  border-bottom: $data-border
  margin: $card-padding + 5px 0
  padding: $card-padding

.subject-summary
  // padding: 0 $card-padding
  color: #ccc
  text-align: justify
  font-size: 15px
</style>

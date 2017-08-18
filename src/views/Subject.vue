<template lang="pug">
.page.subject-page
  AppBar
  #subject
    img.hidden(:src="subject.photos[0].image")
    .subject-photo.bg-image(
      :style="photo"
      :class="{ 'animated fadeIn': subject.photos[0].image }"
    )
    .subject-card
      .subject-basic
        .subject-image.bg-image(:style="image")
        .subject-title
          h1 {{ subject.title }}
          p.original-title(v-if="showOriginalTitle")
            | {{ subject.original_title }}
          p {{ subject.year }}  {{ subject.countries | a2s }}
          p {{ subject.durations | a2s }}  {{ subject.genres | a2s }}
        mu-icon-menu.menu(icon="more_vert")
          mu-menu-item(
            title="豆瓣页面"
            leftIcon="launch"
            :href="subject.alt"
          )
          mu-divider
          mu-menu-item(
            title="以下不适用于中文"
            leftIcon="warning"
            :disabled="true"
          )
          mu-menu-item(
            title="IMDb"
            leftIcon="search"
            :href="searchUrl.imdb"
          )
          mu-menu-item(
            title="Rotten Tomatoes"
            leftIcon="search"
            :href="searchUrl.rottenTomatoes"
          )
          mu-menu-item(
            title="Metacritic"
            leftIcon="search"
            :href="searchUrl.metacritic"
          )
      .subject-rating(:class="{ 'no-rating': !subject.rating.average}")
        rating(
          v-if="subject.rating.average"
          :rating="subject.rating"
        )
        span(v-else) 暂无评分
      .subject-summary(
        v-if="subject.summary"
        :style="summaryHeight"
      )
        p(ref="summary") {{ subject.summary }}
        a.button(
          :class="{ 'closed-button': !isOpen }"
          @click="toggleSummary"
        )
          | {{ isOpen ? '收起' : '展开' }}
      .subject-reviews
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
      },
      isOpen: false
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
    },
    searchUrl() {
      return {
        imdb: `http://m.imdb.com/find?q=${this.subject.original_title}`,
        rottenTomatoes: `https://www.rottentomatoes.com/search/?search=${this.subject.original_title}`,
        metacritic: `http://www.metacritic.com/search/all/${this.subject.original_title}/results`
      }
    },
    summaryHeight() {
      if (this.isOpen) {
        return {
          height: `${this.$refs.summary.clientHeight + 21}px`
        }
      }
      return {}
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
    },
    toggleSummary() {
      this.isOpen = this.isOpen ? false : true
    }
  },
  created() {
    this.preLoad()
    this.loadMore()
  }
}
</script>

<style lang="sass">
$photo-height: 52%
$image-width: 30%
$card-padding: 20px
$data-border: 1px solid #666
$summary-duration: 0.3s

.hidden
  display: none

.subject-photo
  animation-delay: 0.1s
  animation-duration: 0.4s
  padding-top: $photo-height
  box-shadow: inset 0 110px 100px -100px black
  background-color: #222

.subject-card
  padding: $card-padding
  position: relative
  z-index: 99

.subject-basic
  display: flex
  position: relative
  .menu
    position: absolute
    right: 0
    bottom: 0
    .mu-icon-button
      padding: 0
      height: initial
      width: initial
  .subject-image
    width: $image-width
    padding-top: $image-width * 1.4
    overflow: hidden
    pointer-events: none
  .subject-title
    flex: 1
    padding-left: $card-padding
    overflow: hidden
    h1
      font-size: 20px
      font-weight: normal
      line-height: 1
      margin: 0
      margin-bottom: 13px
      color: #fff
    p
      color: #ccc
      font-size: 14px
      white-space: pre-wrap
      line-height: 1.4
      &.original-title
        line-height: 1.2
        margin-bottom: 4px

.subject-rating
  border-top: $data-border
  border-bottom: $data-border
  margin: $card-padding + 5px 0
  padding: $card-padding 10% $card-padding 2%
  &.no-rating
    padding: $card-padding 0
    text-align: center
    font-size: 16px
    color: #ddd

.subject-summary
  position: relative
  color: #ccc
  text-align: justify
  overflow: hidden
  height: 42px
  transition: height $summary-duration
  .button
    position: absolute
    left: 0
    bottom: 0
    transition-duration: $summary-duration
    &.closed-button
      left: calc(100% - 68px)
      bottom: 0
      padding-left: 40px
      background: linear-gradient(to left, #222, #222 50%, transparent)
</style>

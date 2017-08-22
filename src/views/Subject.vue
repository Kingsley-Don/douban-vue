<template lang="pug">
.page.subject-page
  AppBar(:scrollTop="scrollTop" :title="subject.title")
  #subject
    img.hidden(:src="subject.photos[0].image")
    .subject-photo(
      :style="photo"
      :class="{ 'animated fadeIn': subject.photos[0].image }"
    )
    .subject-card
      .subject-basic
        .subject-image(:style="image")
        .subject-title
          h1 {{ subject.title }}
          p.original-title(v-if="showOriginalTitle")
            | {{ subject.original_title }}
          p {{ subject.year }}  {{ subject.countries | a2s }}
          p {{ subject.durations[0] }}  {{ subject.genres | a2s }}
        mu-icon-menu.menu(icon="more_vert")
          mu-menu-item(title="豆瓣页面" leftIcon="launch" :href="subject.alt")
          mu-divider
          mu-menu-item(title="IMDb" leftIcon="search" :href="searchUrl.imdb")
          mu-menu-item(title="Rotten Tomatoes" leftIcon="search" :href="searchUrl.rottenTomatoes")
          mu-menu-item(title="Metacritic" leftIcon="search" :href="searchUrl.metacritic")
      .subject-rating(:class="{ 'no-rating': !subject.rating.average}")
        rating(
          v-if="subject.rating.average"
          :rating="subject.rating"
          :count="subject.ratings_count"
        )
        span(v-else) 暂无评分
      .subject-detail(
        v-if="subject.summary"
        :class="{ 'closed-detail': !isOpen }"
      )
        p.summary {{ subject.summary }}
        .directors(v-if="subject.directors")
          .detail-title 导演
          p {{ subject.directors | name | a2s(', ') }}
        .casts(v-if="subject.casts")
          .detail-title 主演
          p {{ subject.casts | name | a2s(', ') }}
        .writers(v-if="subject.writers")
          .detail-title 编剧
          p {{ subject.writers | name | a2s(', ') }}
        .languages(v-if="subject.languages")
          .detail-title 语言
          p {{ subject.languages | a2s(', ')}}

      .more-button
        a(
          :class="{ 'closed-button': !isOpen }"
          @click="isOpen = isOpen ? false : true"
        ) {{ isOpen ? '收起' : '更多详情' }}
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
        durations: [],
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
        ratings_count: 0,
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
      isOpen: false,
      scrollTop: 0,
      scroller: null
    }
  },
  components: {
    Rating,
    AppBar
  },
  computed: {
    photo() {
      return {
        backgroundImage: `url(${this.subject.photos[0].image})`,
        transform: `translate3d(0, ${this.scrollTop < 220 ? this.scrollTop / 2 : 110}px, 0)`
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
    handleScroll() {
      this.scrollTop = this.scroller.scrollTop
    }
  },
  created() {
    this.preLoad()
    this.loadMore()
  },
  mounted() {
    this.scroller = this.$el
    this.scroller.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="sass">
$photo-height: 52%
$image-width: 30%
$card-padding: 20px
$border-line: 1px solid #333

.hidden
  display: none

.subject-photo
  +bg
  animation:
    delay: 0.1s
    duration: 0.4s
  padding-top: $photo-height
  box-shadow: inset 0 110px 100px -100px black
  background-color: #222

.subject-card
  padding-top: $card-padding
  position: relative
  background-color: #111

.subject-basic
  display: flex
  position: relative
  margin: 0 $card-padding
  .menu
    position: absolute
    right: 0
    bottom: 0
    .mu-icon-button
      padding: 0
      height: initial
      width: initial
  .subject-image
    +bg
    width: $image-width
    padding-top: $image-width * 1.4
  .subject-title
    flex: 1
    margin-left: $card-padding
    h1
      font:
        size: 20px
        weight: normal
      line-height: 1
      margin: 0
      margin-bottom: 13px
    p
      color: $text-color
      white-space: pre-wrap
      &.original-title
        line-height: 1.2
        margin-bottom: 4px

.mu-popover
  background-color: #222

.subject-rating
  border:
    top: $border-line
    bottom: $border-line
  margin: $card-padding
  padding:
    top: $card-padding
    right: 10%
    bottom: $card-padding
    left: 2%
  &.no-rating
    padding: $card-padding 0
    text-align: center
    font-size: 16px
    color: $text-color

.subject-detail
  margin: 0 $card-padding
  position: relative
  overflow: hidden
  &.closed-detail
    height: 3 * 21px
    position: relative
    &::after
      content: ''
      position: absolute
      bottom: 0
      right: 0
      width: 54px
      height: 21px
      background: linear-gradient(to right, rgba(17, 17, 17, 0.1), rgba(17, 17, 17, 0.9))
  .detail-title
    margin:
      top: 12px
      bottom: 4px

  p
    color: $text-color
    text-align: justify
    &:not(.summary)
      font-size: 12px
      line-height: 1.3
    &.summary
      border-bottom: $border-line
      padding-bottom: $card-padding

.more-button
  text-align: center
  line-height: 3
  font-size: 16px
  margin: 0 $card-padding
  border-bottom: $border-line
</style>

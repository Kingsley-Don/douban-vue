<template lang="pug">
.small-card.mu-paper(@click="toSubject()")
  .card-poster(
    :style="{ 'background-image': 'url(' + subject.images.large + ')' }"
  )
  .card-info
    p.title
      | {{ subject.title }}
    p.subtitle(v-if="showDate")
      | {{ subject.mainland_pubdate }}
    p.subtitle(v-else)
      mu-icon(
        v-if="subject.rating.average !== 0"
        value="star"
      )
      |  {{ subject.rating.average | rating }}
</template>

<script>
export default {
  name: 'small-card',
  props: {
    subject: {
      type: Object,
      default: {
        id: 0,
        title: '',
        rating: {
          average: 0
        },
        images: {
          large: ''
        },
        mainland_pubdate: ''
      },
      required: true
    },
    showDate: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toSubject() {
      if (this.subject.id !== 0) {
        this.$router.push({
          name: 'subject',
          params: {
            id: this.subject.id
          },
        })
      }
    }
  }
}
</script>

<style lang="sass">
$title-alpha: 0.5
$card-radius: 2px

.small-card
  overflow: hidden
  border-radius: $card-radius

  .card-poster
    background-size: cover
    background-repeat: no-repeat

  .card-info
    padding: 9px 7px
    overflow: hidden

    .title
      padding-bottom: 3px
      color: white
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      font-size: 14px

    .subtitle
      color: #ccc
      font-size: 14px
      i
        color: rgb(233, 176, 78)
        font-size: 15px
        vertical-align: text-top
</style>

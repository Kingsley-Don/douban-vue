<template lang="pug">
.small-card.mu-paper(@click="toDetail()")
  .card-poster(:style="{ 'background-image': 'url(' + subject.images.large + ')' }")
  .card-info
    p.card-title
      b {{ subject.title }}
    p.card-score
      | {{ subject.rating.average | rating }}
</template>

<script>
export default {
  name: 'small-card',
  props: {
    subject: {
      type: Object,
      default: {
        title: '',
        rating: {
          average: 0
        },
        images: {
          large: ''
        },
      },
      required: false
    }
  },
  methods: {
    toDetail() {
      if (this.movie.id !== 0) {
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
$card-radius: 3px

.small-card
  overflow: hidden
  border-radius: $card-radius

  .card-poster
    background-size: cover
    background-repeat: no-repeat

  .card-info
    padding: 9px 7px
    overflow: hidden

    .card-title
      padding-bottom: 3px

      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap

    .card-score
      color: orange
</style>

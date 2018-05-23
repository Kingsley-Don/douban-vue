<template lang="pug">
.small-card(@click="toSubject()")
  .card-image(
    :style="{ backgroundImage: `url(${subject.images.large})` }"
  )
  .card-title
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
      // default: {
      //   id: 0,
      //   title: '',
      //   rating: {
      //     average: 0,
      //   },
      //   images: {
      //     large: '',
      //   },
      //   mainland_pubdate: '',
      // },
      required: true,
    },
    showDate: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toSubject() {
      if (this.subject.id !== 0) {
        this.$router.push({
          name: 'subject',
          params: {
            id: this.subject.id,
            subject: this.subject,
          },
        });
      }
    },
  },
};
</script>

<style lang="sass">


.small-card
  overflow: hidden
  .card-image
    +bg
    padding-top: 140%
    background-color: #333

  .card-title
    padding: 8px 0
    overflow: hidden

    .title
      color: white
      font-size: $text-size
      +text-overflow

    .subtitle
      color: $text-color
      font-size: $text-size
      i
        color: $star-color
        font-size: 14px
        line-height: 1.5
</style>

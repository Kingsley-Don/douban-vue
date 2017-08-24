<template lang="pug">
.comment
  .left
    .avatar(:style="{ backgroundImage: `url(${comment.author.avatar})` }")
  .right
    .head
      div
        .name {{ comment.author.name }}
        .rating
          Stars.rating(:stars="comment.rating.value + '0'" :size="12")
          span &nbsp;{{ comment.created_at.slice(0, 10) }}
      .useful
        mu-icon(value="thumb_up")
        | &nbsp;&nbsp;{{ comment.useful_count }}
    p.content {{ comment.content }}
</template>

<script>
import Stars from '@/components/Stars'

export default {
  name: 'comment',
  props: ['comment'],
  components: {
    Stars
  }
}
</script>

<style lang="sass">
$avatar-width: 40px
$avatar-border-width: 3px

.comment
  display: flex
  .left
    margin-right: 15px
    .avatar
      width: $avatar-width
      padding-top: $avatar-width - 2 * $avatar-border-width
      border: $avatar-border-width solid #222
      border-radius: 50%
      +bg
  .right
    flex: 1
    .head
      display: flex
      // align-items: center
      .name
      .rating
        font-size: 0
        .stars
          i
            line-height: 1.5
        span
          font-size: 12px
          color: $text-color
      .useful
        flex: 1
        text-align: right
        color: $text-color
        i
          line-height: 1.5
          font-size: 14px
    .content
      color: $text-color
      text-align: justify

</style>

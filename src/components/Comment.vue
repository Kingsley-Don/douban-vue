<template lang="pug">
.comment
  .left
    .avatar(:style="{ backgroundImage: `url(${comment.author.avatar})` }")
  .right
    .head
      div
        .name {{ comment.author.name }}
        .comment-details
          Stars.comment-stars(:stars="comment.rating.value + '0'" :size="12")
          .date &nbsp;&nbsp;{{ comment.created_at }}
      .useful {{ comment.useful_count }}&nbsp;&nbsp;
        mu-icon(value="thumb_up")
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

<style lang="sass" scoped>
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
        line-height: 1
        font-size: 16px
      .comment-details
        white-space: nowrap
        font-size: 0
        padding: 4px 0
        .stars
          display: inline-block
          vertical-align: bottom
        .date
          display: inline-block
          font-size: 12px
          color: $text-color
          line-height: 1
      .useful
        flex: 1
        text-align: right
        color: $text-color
        line-height: 1
        white-space: nowrap
        i
          font-size: 14px
    .content
      color: $text-color
      text-align: justify

</style>

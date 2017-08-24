<template lang="pug">
.comment
  .left
    .avatar(:style="{ backgroundImage: `url(${comment.author.avatar})` }")
  .right
    .name {{ comment.author.name }}
    .rating
      Stars(:stars="comment.rating.value + '0'")
    .content
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
$avatar-width: 35px
$avatar-border-width: 2px

.comment
  display: flex
  .left
    .avatar
      width: $avatar-width
      padding-top: $avatar-width - 2 * $avatar-border-width
      border: $avatar-border-width solid #222
      border-radius: 50%
      +bg
</style>

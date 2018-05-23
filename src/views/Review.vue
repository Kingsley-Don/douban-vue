<template lang="pug">
.page.review-page
  AppBar.review-bar(:title="review.title")
  .review-wrapper
    h1.review-title(v-if="review.title !== 'Loading...'") {{ review.title }}
    .review-author
      Stars.review-stars(:stars="review.rating.value + '0'" :size="14")
      .author-name {{ review.author.name }}
      .useful 有用 {{ review.useful_count }} / 无用 {{ review.useless_count }}
    .dates
      .date 创建于 {{ review.created_at }}
      .date 更新于 {{ review.updated_at }}
    p.review-content {{ review.content }}
</template>

<script>
import AppBar from '@/components/AppBar';
import Stars from '@/components/Stars';
import * as api from '@/api/api';
import * as _ from 'lodash';

export default {
  data() {
    return {
      review: null,
    };
  },
  components: {
    AppBar,
    Stars,
  },
  methods: {
    init() {
      this.review = {
        title: 'Loading...',
        content: '',
        rating: {
          value: 0,
        },
        author: {
          name: '',
        },
        useful_count: 0,
        useless_count: 0,
        created_at: '',
        updated_at: '',
        id: 0,
      };
    },
    getReview() {
      api.getReview(this.$route.params.id).then((res) => {
        _.merge(this.review, res);
      });
    },
  },
  activated() {
    if (this.$route.params.id !== this.review.id) {
      this.init();
      this.getReview();
    }
  },
  created() {
    this.init();
    this.getReview();
  },
};
</script>

<style lang="sass">
.review-page
  .review-wrapper
    padding: 15px
    h1.review-title
      font:
        size: 24px
        weight: normal
      line-height: 1.2
      margin: 0
      margin-bottom: 5px
    .review-author
      font-size: 0
      padding: 5px 0
      .author-name, .useful
        font-size: 14px
        margin-left: 5px
        line-height: 1
        display: inline-block
      .review-stars
        display: inline-block
    .dates
      font-size: 14px
      margin: 14px 0
    p.review-content
      color: $text-color
      text-align: justify
      word-break: break-all
      white-space: pre-wrap
</style>

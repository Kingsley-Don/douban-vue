<template lang="pug">
.page.list-page
  AppBar(
    :title="title"
  )
  .small-list
    small-card(
      v-for="(subject, index) in subjects"
      :subject="subject"
      :showDate="showDate"
      :key="index"
    )
  mu-infinite-scroll(
    :scroller="scroller"
    :loading="loading"
    :isLoaded="isLoaded"
    loadingText="正在加载"
    @load="loadMore"
  )
</template>

<script>
import AppBar from '@/components/AppBar';
import SmallCard from '@/components/SmallCard';
import { mapState } from 'vuex';
import * as types from '@/store/types';

export default {
  name: 'small-list',
  data() {
    return {
      scroller: null,
      loading: false,
      isLoaded: false,
      listName: this.$route.name,
    };
  },
  computed: {
    showDate() {
      return this.listName === 'comingSoon';
    },
    title() {
      if (this.listName === 'comingSoon') {
        return '即将上映';
      } else if (this.listName === 'inTheaters') {
        return '正在热映';
      }
      return '';
    },
    ...mapState({
      subjects(state) {
        return state.lists[this.listName].subjects;
      },
      count(state) {
        return state.lists[this.listName].count;
      },
      total(state) {
        return state.lists[this.listName].total;
      },
    }),
  },
  methods: {
    loadMore() {
      this.loading = true;
      this.$store.dispatch(types.GET_SUBJECTS, {
        name: this.listName,
        start: this.count,
        count: 18,
      });
    },
    checkLoaded() {
      if (this.total !== 0 && this.count === this.total) {
        this.isLoaded = true;
      }
    },
  },
  watch: {
    subjects() {
      this.checkLoaded();
      this.loading = false;
    },
  },
  components: {
    AppBar,
    SmallCard,
  },
  created() {
    if (this.count === 0) {
      this.loadMore();
    }
    this.checkLoaded();
  },
  mounted() {
    this.scroller = this.$el;
  },
};
</script>

<style lang="sass">
$columns: 3

.small-list
  padding:
    top: $gap
    left: $gap
    right: $gap
  display: grid
  grid-template-columns: repeat($columns, 1fr)
  grid-column-gap: $gap
</style>

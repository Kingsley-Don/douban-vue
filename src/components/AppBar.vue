<template lang="pug">
mu-appbar.bar(
  :class="{ 'home-bar': isHome }"
  :title="title"
  :style="subjectStyle"
  :titleClass="{ 'opacity': progress !== 1 && isSubject}"
)
  mu-icon-button(
    :icon="icon"
    slot="left"
    @click="iconClick"
  )
  mu-icon-button(
    icon="search"
    slot="right"
    @click="search"
  )
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    icon: {
      type: String,
      default: 'arrow_back',
    },
    title: {
      type: String,
      default: '',
    },
    progress: {
      default: 0,
    },
  },
  computed: {
    isHome() {
      return !!(this.$route.name === 'home');
    },
    isSubject() {
      return !!(this.$route.name === 'subject');
    },
    subjectStyle() {
      if (this.progress < 1 && this.isSubject) {
        return {
          boxShadow: '0 0 0 transparent',
          backgroundColor: `rgba(34, 34, 34, ${this.progress})`,
        };
      }
      return {};
    },
  },
  methods: {
    iconClick() {
      if (this.isHome) {
        this.$emit('toggle');
      } else {
        this.$router.go(-1);
      }
    },
    search() {},
  },
};
</script>

<style lang="sass">
.bar
  position: fixed
  top: 0
  left: 0

.mu-appbar-title
  transition: 0.2s

.opacity
  opacity: 0

// .no-bg
//   background-color: transparent
//   box-shadow: 0 1px 6px transparent, 0 1px 4px transparent

// .home-bar .mu-appbar-title span::after
//   content: ' 电影'
//   color: orange
</style>

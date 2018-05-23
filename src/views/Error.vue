<template lang="pug">
  #error
    img.error-img(src="../assets/error.png")
    .error-info
      p.error-code {{ $route.params.errorCode }}
      p 一股来自东方的神秘力量阻止了你的访问
</template>

<script>
export default {
  methods: {
    returnBack() {
      this.$router.go(-2);
    },
    returnHome() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style lang="sass">
#error
  padding-top: 100px
  text-align: center
  .error-code
    font-size: 80px
    font-family: Righteous
    color: brown
  .error-img
    width: 50%
</style>

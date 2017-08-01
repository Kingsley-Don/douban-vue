<template lang="pug">
#bar
  mu-appbar(:title="title")
    mu-icon-button(
      :icon="icon",
      slot="left",
      @click="click"
    )
</template>

<script>
export default {
  data() {
    return {
      title: '正在热映',
      icon: 'arrow_back'
    }
  },
  methods: {
    click() {
      if (this.icon === 'arrow_back') {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.mu-appbar
  position: fixed
  top: 0
  left: 0
</style>

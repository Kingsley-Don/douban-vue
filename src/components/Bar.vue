<template lang="pug">
#bar
  mu-appbar(:title="title")
    mu-icon-button(:icon="icon", slot="left")
</template>

<script>
export default {
  data() {
    return {
      title: '正在热映',
      icon: 'arrow_back'
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

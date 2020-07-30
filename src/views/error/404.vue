<template>
  <div class="bg">
      <img src="../../assets/404.png" width="100%" @click="goBack">
  </div>
</template>

<script>
export default {
  name: 'Page404',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

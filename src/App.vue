<template>
  <div id="app">
      <router-view/>
    <ToTop></ToTop>
    <div class="copyRight">
      <div>@2020 itmacy,All Rights reserved</div>
      <div>版权所有：itmacy</div>
    </div>
  </div>
</template>
<script>
import ToTop from './components/totop/'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    ToTop
  },
  mounted () {
    this.uppScreenWidth(document.body.clientWidth)
    this.uppScreenHeight(document.body.clientHeight)
    window.addEventListener('resize', this.handleResize, true)
    // console.log('网页可见区域宽：', this.screenWidth)
    // console.log('网页可见区域高：', this.screenHeight)
  },
  computed: {
    ...mapGetters({
      screenWidth: 'getScreenWidth',
      screenHeight: 'getScreenHeight'
    })
  },
  methods: {
    ...mapActions({
      uppScreenWidth: 'updateScreenWidth',
      uppScreenHeight: 'updateScreenHeight'
    }),
    handleResize () {
      this.uppScreenWidth(document.body.clientWidth)
      this.uppScreenHeight(document.body.clientHeight)
      // console.log('网页可见区域宽：', this.screenWidth)
      // console.log('网页可见区域高：', this.screenHeight)
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: #F6F6F6;
}
.copyRight{
  color: #666666;
  font-size: 12px;
  padding: 10px 0;
}
.enter-test{
  transform: translateX(20px);
  transition: all .5s ease;
}
.leave-test{
  transform: translateX(20px);
  transition: all .5s ease;
}
</style>

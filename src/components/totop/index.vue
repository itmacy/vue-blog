<template>
    <div class="wrap" :style="style" @click="toTop">
      <div class="default">
        <slot>
          <img src="../../assets/top.png" width="30px" height="30px" alt="top">
        </slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ToTop',
  props: {
    anchor: { // 锚点
      type: String,
      default: '#app'
    },
    right: { // 距离右边的位置
      type: Number,
      default: 40
    },
    bottom: { // 距离底部的位置
      type: Number,
      default: 40
    },
    height: { // 多高后出现
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      style: {
        display: 'none',
        right: this.right + 'px',
        bottom: this.bottom + 'px'
      },
      el: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true) // 监听滚动事件
  },
  methods: {
    handleScroll (e) {
      if (!e.target.documentElement && !e.target.body) {
        return
      }
      this.el = e.target.documentElement
      const scrollTop = e.target.documentElement.scrollTop // 滚动顶部
      if (scrollTop > this.height) { // 超过指定高度时显示
        Object.assign(this.style, { display: 'block' })
      } else {
        Object.assign(this.style, {
          animation: 'disapear .5s linear',
          display: 'none'
        })
      }
    },
    toTop () {
      console.log('回到顶部')
      this.el.scrollTop = 0
    }
  }
}
</script>

<style scoped lang = "scss">
.wrap{
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  animation: appear .5s linear;
}
.default{
  color: #58BCB3;
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>

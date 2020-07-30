<template>
    <div class="water-fall">
      <div class="content" ref="content">
        <slot></slot>
      </div>
      <div class="more" @click="loadMore">更多</div>
      <Loading :show="loading"/>
    </div>
</template>

<script>
import Loading from './Loading'

/**
 * 发送的事件
 * 事件名不存在大写与-转换
 */
const LOAD_MORE = 'load-more'

export default {
  name: 'WaterFall',
  components: {
    Loading
  },
  data () {
    return {
      loading: false, // 是否加载
      bottom: 0
    }
  },
  created () {
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true) // 监听滚动事件
  },
  methods: {
    clickItem () {
      this.$router.push('/zone/article')
    },
    loadMore () { // 更多
      this.loading = true
      setTimeout(() => {
        // this.itemList = this.itemList.concat(itemList)
        this.$emit(LOAD_MORE)
        this.loading = false
      }, 1000)
    },
    handleScroll (e) { // 处理滚动事件
      if (!e.target.documentElement || !this.$refs.content) {
        return
      }
      const scrollTop = e.target.documentElement.scrollTop // 被卷去的高度
      // const contentH = this.$refs.content.scrollHeight // 内容高度
      const viewH = this.$refs.content.clientHeight
      // console.log('网页可见区域高viewH:', viewH)
      // console.log('网页正文全文高contentH:', contentH)
      // console.log('网页被卷去的高scrollTop:', scrollTop)
      // console.log('bottom:', this.bottom)
      if (scrollTop + 300 >= viewH && !this.loading && this.bottom + 300 < scrollTop) {
        console.log('到达底部')
        this.bottom = scrollTop // 把被卷起的高度赋给bottom
        // console.log('bottom更改后:', this.bottom)
        this.loadMore()
      }
    }
  }
}
</script>

<style scoped lang = "scss">
.water-fall{
  .content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .more{
    padding: 6px;
    text-align: center;
    border: 1px dashed #999;
    color: #999;
    cursor: pointer;
    margin-top: 20px;
  }
}
</style>

<template>
  <div class="blog-friend">
    <WaterFall @load-more ="loadMore">
      <ArticleCard
        v-for="(item, index) in itemList"
        :item="item"
        :key="index"
        @click="clickCard"
      >
      </ArticleCard>
    </WaterFall>
  </div>
</template>

<script>
import WaterFall from '../waterfall/'
import ArticleCard from '../waterfall/ArticleCard'

export default {
  name: 'BlogFriend',
  components: {
    WaterFall,
    ArticleCard
  },
  data () {
    return {
      itemList: [
        {
          img: require('../../assets/author.jpg'),
          month: 'Aug',
          day: 2,
          title: 'itmacy',
          // author: 'itmacy',
          desc: '我是itmacy，欢迎pick我.'
        },
        {
          img: require('../../assets/img/fox.jpeg'),
          month: 'Jun',
          day: 25,
          title: '黄小小',
          // author: 'itmacy',
          desc: '我是黄小小，欢迎pick我.'
        },
        {
          img: require('../../assets/img/xjy.jpg'),
          month: 'Oct',
          day: 10,
          title: '陈拉拉',
          // author: 'itmacy',
          desc: '我是陈拉拉，欢迎pick我.'
        },
        {
          img: require('../../assets/img/timg.jpg'),
          month: 'Sep',
          day: 20,
          title: '杜晓飞',
          // author: 'itmacy',
          desc: '我是杜晓飞，欢迎pick我.'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    loadMore () {
      this.itemList = this.itemList.concat(this.itemList)
    },
    clickCard (val) {
      this.$router.push('/zone/type')
    }
  }
}
</script>

<style scoped lang = "scss">

</style>

<template>
    <div class="blog-article">
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
import itemList from '../../data/data'
import WaterFall from '../waterfall/'
import ArticleCard from '../waterfall/ArticleCard'

export default {
  name: 'BlogArticle',
  components: {
    WaterFall,
    ArticleCard
  },
  data () {
    return {
      itemList: [
        {
          img: require('../../assets/img/timg.jpg'),
          month: 'Jan',
          day: 5,
          title: 'Java',
          author: 'itmacy',
          desc: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点.'
        }
      ]
    }
  },
  created () {
    this.itemList = itemList
  },
  mounted () {
  },
  methods: {
    loadMore () {
      this.itemList = this.itemList.concat(itemList)
    },
    clickCard (val) {
      this.$router.push('/zone/article')
    }
  }
}
</script>

<style scoped lang = "scss">

</style>

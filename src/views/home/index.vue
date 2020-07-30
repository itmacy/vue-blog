<template>
    <div class="home-page">
      <div class="nav">
        <router-link to="/blog">博文</router-link>
        <router-link to="/friend">博友</router-link>
      </div>
      <div class="body">
        <div class="banner-wrap">
          <el-carousel :interval="8000" :height="bannerHeight" :arrow="arrow" :indicator-position="indicatorPosition">
            <el-carousel-item v-for="(item, index) in imgList" :key="index">
              <img class="banner-img" :src="item.img" alt="index">
            </el-carousel-item>
          </el-carousel>
          <div class="search">
            <img class="searchIcon" src="../../assets/home/search.png" width="30px" height="30px" alt="搜索图标">
            <input class="searchInput" type="text" placeholder="search..." v-model="keyword" @change="search">
          </div>
        </div>
        <transition>
          <router-view/>
        </transition>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters({
      screenWidth: 'getScreenWidth'
    }),
    bannerHeight () {
      return this.screenWidth >= 768 ? '500px' : '300px'
    },
    arrow () {
      return this.screenWidth >= 768 ? 'always' : 'never'
    },
    indicatorPosition () {
      return this.screenWidth >= 768 ? '' : 'none'
    }
  },
  data () {
    return {
      keyword: '',
      currentPage: 'article', // 当前所在页
      imgList: [
        {
          img: require('../../assets/home/banner1.jpg')
        },
        {
          img: require('../../assets/home/banner2.jpg')
        },
        {
          img: require('../../assets/home/banner3.png')
        }
      ]
    }
  },
  watch: {
    $route (to, from) {
      // console.log('to:', to)
      // console.log('from:', from)
      switch (to.name) {
        case 'BlogArticle':
          this.currentPage = 'article'
          break
        case 'BlogFriend':
          this.currentPage = 'friend'
          break
      }
      console.log('当前页面：', this.currentPage)
    }
  },
  methods: {
    search () {
      console.log('搜索的关键字：', this.keyword)
      console.log('当前页面：', this.currentPage)
      // 根据不同页面进行接口请求
    }
  }
}
</script>

<style scoped lang="scss">
.home-page{
  background-color: #F6F6F6;
  animation: appear .5s linear;
  .nav {
    padding: 20px;
    a {
      font-size: 16px;
      font-weight: bold;
      color: #2c3e50;
      padding: 0 5%;
      text-decoration: none;

      &.router-link-exact-active {
        color: #58BCB3;
      }
    }
  }
  .body{
    padding: 0 10%;
  }
  .banner-wrap{
    box-sizing: border-box;
    width: 100%;
    /*height: 500px;*/
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    .banner-img{
      width: 100%;
      height: 500px;
    }
  }
  .swiper{
    width: 100%;
  }
  .search{
    display: flex;
    align-items: center;
    max-width: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 66;
    .searchIcon{
      margin-right: -45px;
      z-index: 66;
    }
    .searchInput{
      width: 500px;
      height: 50px;
      border-radius: 40px;
      padding-left: 50px;
      border: none;
      outline: none; /* 去除外边框  */
      font-size: 16px;
      color: #666;
    }
  }
}
@media only screen and (max-width: 768px) { /* 小于768px时 */
  .body{
    padding: 0!important;
  }
  /* banner */
  .el-carousel{
    height: 300px !important;
  }
  .banner-img{ // banner图片
    height: 300px !important;
  }
  /* 搜索框 */
  .searchInput{
    height: 40px !important;
  }
}
</style>

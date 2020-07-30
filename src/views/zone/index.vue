<template>
    <div class="zone">
      <div class="top">
        <div class="left">
          <span class="email">
            <img class="emailImg" src="../../assets/contact/email.png">
            <span>{{ email }}</span>
          </span>
          <span class="desc">Hello,我是{{ author }},欢迎来到我的博客！</span>
        </div>
        <div class="right">
          <SocialContact></SocialContact>
        </div>
      </div>
      <MobileSearch class="mobileSearch" @search = "search"></MobileSearch>
      <div class="body">
        <div class="nav">
          <router-link v-for="(item,index) in routes" :key="index" :to="item.route">
            {{ item.title }}
          </router-link>
        </div>
        <div class="center">
          <div class="contentDiv">
           <div class="content" ref="content">
             <router-view/>
           </div>
          </div>
          <Author
            class="author"
            :style="authorStyle"
            @toTop = "toTop"
            @getHeight = "getAuthorHeight"
          ></Author>
        </div>
      </div>
    </div>
</template>

<script>
import Author from './Author'
import SocialContact from './SocialContact'
import MobileSearch from './mobilesearch/'

export default {
  name: 'Zone',
  components: {
    Author,
    SocialContact,
    MobileSearch
  },
  mounted () {
    // console.log('挂载zone...')
    window.addEventListener('scroll', this.handleScroll, true) // 监听滚动事件
    this.contentHeight = this.$refs.content.offsetHeight // 获取内容高度
    this.toTop()
  },
  updated () {
    this.contentHeight = this.$refs.content.offsetHeight // 获取内容高度
  },
  watch: {
    $route (to, from) { // 监听路由，解决当组件初始化后，再次进入组件回到回到顶部
      // console.log('to:', to)
      this.toTop()
    }
  },
  data () {
    return {
      authorStyle: { // 组件样式
        top: 0
      },
      lastScroll: 0, // 上次滚动距离
      contentHeight: 0, // 内容高度
      authorHeight: 0, // 作者栏高度
      routes: [
        {
          title: '主页',
          route: '/blog'
        },
        {
          title: '文章',
          route: '/zone/type'
        },
        {
          title: '时间轴',
          route: '/zone/timeline'
        },
        {
          title: '关于',
          route: '/zone/about'
        }
      ],
      author: 'itmacy',
      email: '2792889552@qq.com'
    }
  },
  methods: {
    handleScroll (e) { // 处理滚动事件 （动态处理author组件距离内容顶部位置）
      if (this.contentHeight < this.authorHeight) { // 当内容高度小于author高度，不做任何处理
        return
      }
      if (!e.target.documentElement && !e.target.body) {
        return
      }
      const scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop // 滚动顶部
      const top = Number.parseInt(scrollTop) // author距离顶部的距离
      const height = this.contentHeight - 800 // 内容高度
      // console.log('top:', top)
      // console.log('height:', height)
      // 向下滚动多少像素后设置位置
      if (scrollTop > this.lastScroll && scrollTop - this.lastScroll < this.authorHeight) {
        // console.log('本次：', scrollTop)
        // console.log('上次：', this.lastScroll)
        // console.log('不设置位置...')
        if (top >= height) { // 当到达底部时
          this.authorStyle = {
            bottom: 0
          }
        }
        return
      }
      // 向上滚动多少像素后设置位置
      if (scrollTop < this.lastScroll && scrollTop - this.lastScroll > -200) {
        // console.log('本次：', scrollTop)
        // console.log('上次：', this.lastScroll)
        // console.log('不设置位置...')
        if (top <= 200) { // 当到达顶部
          this.authorStyle = {
            top: 0
          }
        }
        return
      }
      if (top > height) { // 当向下滚动达到底部时
        this.authorStyle = {
          bottom: 0
        }
      } else if (top <= 200) { // 当向上滚动达到顶部时
        this.authorStyle = {
          top: 0
        }
      } else {
        this.authorStyle = {
          top: top + 'px'
        }
      }
      this.lastScroll = scrollTop // 重置上次滚动
    },
    toTop () { // 回到顶部
      document.body.scrollTop = document.documentElement.scrollTop = 0
      this.authorStyle = {
        top: 0
      }
    },
    getAuthorHeight (val) { // 获取author组件高度
      this.authorHeight = val
      // console.log('author:', this.authorHeight)
    },
    search (val) {
      console.log('搜索的关键字：', val)
      this.$router.push('/zone/type')
    }
  }
}
</script>

<style lang = "scss" scoped>
.zone{
  box-sizing: border-box;
  background-color: #f5f5f5;
  animation: appear .5s linear;
  .top{
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 6px 10px 4px;
    border: 1px solid #eee;
    box-shadow: 0 0 4px #eeeeee;
    .left{
      .email{
        margin-right: 30px;
        .emailImg{
          width: 15px;
          height: 15px;
          margin-right: 5px;
          margin-bottom: -3px; /* 让图标和文章对齐 */
        }
      }
      .desc{}
    }
    .right{
    }
  }
  .body{
    padding: 0 10%;
    .nav {
      padding: 20px 10px;
      a {
        font-weight: bold;
        color: #2c3e50;
        padding: 0 8%;
        text-decoration: none;

        &.router-link-exact-active {
          color: #58BCB3;
        }
        &:hover{
          color: #58BCB3;
        }
      }
    }
    .center{
      display: flex;
      position: relative;
      margin-bottom: 20px;
      .contentDiv{
        /*width: 90%;*/
        width: 70%;
        text-align: left;
        font-size: 15px;
        .content {
          /*width: 80%;*/
          /*width: 98%;*/
        }
      }
      .author{
        width: 28%;
        box-shadow: 0 0 4px #eeeeee;
        position: absolute;
        right: 0;
        margin-bottom: 40px;
      }
    }
    .toTop{
      position: fixed;
      right: 20px;
      bottom: 50px;
    }
  }
}
@media only screen and (max-width: 768px) { /* 小于768px时 */
  .top, .author{
    display: none !important;
  }
  .mobileSearch{
    /*margin-bottom: 20px;*/
  }
  .body{
    padding: 0 !important;
      .contentDiv{
        width: 100% !important;
        .content{
          width: 100% !important;
        }
    }
    .nav{
      display: none !important;
    }
  }
}
@media only screen and (min-width: 768px){
  .mobileSearch{
    display: none !important;
  }
}
</style>

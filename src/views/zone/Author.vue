<template>
    <div class="author" ref="author">
      <div class="block">
        <div class="titleDiv">
          <div class="titleItem1"></div>
          <div class="titleItem2">关于作者</div>
        </div>
        <div class="imgDiv"><img class="img" :src="author.icon"  height="230"/></div>
        <div class="name">{{ author.name }}</div>
      </div>
      <div class="block">
        <div class="titleDiv">
          <div class="titleItem1"></div>
          <div class="titleItem2">热门博客</div>
        </div>
        <div class="article" v-for="(item, index) in hotBlogList" :key="index" @click="readBlog">
          <div class="articleItem1"><img :src="item.icon"  height="50"/></div>
          <div class="articleItem2">
            <div class="title">{{ item.title }}</div>
            <div class="date">发布日期：{{ item.publishDate }}</div>
          </div>
        </div>
      </div>
      <div class="block">
        <div>
          <img src="../../assets/about/bg.jpg" width="90%">
        </div>
        <Search class="search" @search="search"></Search>
      </div>
      <div class="block">
        <div class="titleDiv">
          <div class="titleItem1"></div>
          <div class="titleItem2">博客分类</div>
        </div>
        <div class="type" v-for="(item, index) in blogTypeList" :key="index" @click="getBlogList">{{ item.type }}</div>
      </div>
    </div>
</template>

<script>
import Search from './search/'
/**
* 事件名
*/
const TO_TOP = 'toTop'
const GET_HEIGHT = 'getHeight'

export default {
  name: 'Author',
  components: {
    Search
  },
  mounted () {
    const height = this.$refs.author.offsetHeight // 获取容器高度
    // console.log('高度:', height)
    this.$emit(GET_HEIGHT, height) // 发送事件
  },
  data () {
    return {
      author: { // 作者
        icon: require('../../assets/author.jpg'),
        name: 'itmacy'
      },
      hotBlogList: [ // 热门博客
        {
          icon: require('../../assets/img/xjy.jpg'),
          title: 'Java',
          publishDate: '2020-07-20'
        },
        {
          icon: require('../../assets/img/fox.jpeg'),
          title: 'Web',
          publishDate: '2020-07-23'
        },
        {
          icon: require('../../assets/img/timg.jpg'),
          title: 'C++',
          publishDate: '2020-07-22'
        }
      ],
      blogTypeList: [ // 博客分类
        {
          type: 'Java开发'
        },
        {
          type: 'web开发'
        },
        {
          type: 'C++开发'
        }
      ]
    }
  },
  methods: {
    getBlogList () {
      this.$emit(TO_TOP) // 发送回到顶部的事件
      this.$router.push('/zone/type')
    },
    readBlog () {
      this.$emit(TO_TOP) // 发送回到顶部的事件
      this.$router.push('/zone/article')
    },
    search (val) { // 搜索
      console.log('搜索的关键字：', val)
      this.$emit(TO_TOP) // 发送回到顶部的事件
      this.$router.push('/zone/type')
    }
  }
}
</script>

<style scoped lang = "scss">
.author{
  width: 350px;
  font-size: 12px;
  background-color: #ffffff;
  .block{
    margin-bottom: 20px;
    .titleDiv{
      display: flex;
      align-items: center;
      margin: 10px 0 20px;
      .titleItem1{
        width: 5px;
        height: 15px;
        background-color: #58BCB3;
      }
      .titleItem2{
        margin-left: 10px;
        font-size: 14px;
      }
    }
    .imgDiv{
      padding: 10px;
      .img{
        max-width: 100%;
      }
    }
    .name{
      text-align: right;
      font-family: MyFont,serif;
      font-size: 30px;
      margin-right: 20px;
    }
    .article{
      display: flex;
      align-items: center;
      border-top: 1px solid #eeeeee;
      cursor: pointer;
      .articleItem1{
        padding: 6px;
        width: 30%;
      }
      .articleItem2{
        text-align: left;
        width: 60%;
        .title{
          font-size: 14px;
          /* 显示两行，省略号 */
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .date{
          margin-top: 6px;
          color: #58BCB3;
          font-size: 10px;
        }
      }
    }
    .type{
      text-align: left;
      font-size: 14px;
      color: #666666;
      border-top: 1px solid #eeeeee;
      padding: 10px 20px;
      cursor: pointer;
      &:hover{
        background-color: #79C9C2;
        color: #ffffff;
      }
    }
    .search{
      margin-top: 10px;
    }
  }
}

</style>

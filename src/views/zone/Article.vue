<template>
    <div class="article">
      <div class="content" v-html="text"></div>
      <div class="link" @click="readArticle()">
        <div class="linkItem">
          {{ lastArticle? '上一篇:'+ lastArticle.title: '没有上一篇' }}
        </div>
        <div class="linkItem right" @click="readArticle()">
          {{ nextArticle? '下一篇:'+ nextArticle.title: '没有下一篇' }}
        </div>
      </div>
    </div>
</template>

<script>
// 参考：https://github.com/showdownjs/showdown
import showdown from 'showdown'
import MarkdownText from '../../data/MarkdownText'

export default {
  name: 'Article',
  components: {
  },
  watch: {
    $route (to, from) { // 监听路由，解决当组件初始化后，再次进入组件回到回到顶部
      console.log('to:', to)
      console.log('文章详情...')
    }
  },
  data () {
    return {
      text: '',
      lastArticle: {
        id: '654321',
        title: '你知道？'
      },
      nextArticle: {
        id: '789456',
        title: '我不知道'
      }
    }
  },
  created () {
    const markDownText = MarkdownText.text
    const converter = new showdown.Converter({
      parseImgDimensions: true, // 支持从markdown语法中设置图像尺寸
      simplifiedAutoLink: true, // 自动转为链接形式
      strikethrough: true, // 语法 ~~strikethrough~~ 解析为 <del>strikethrough</del>
      tables: true, // 转为表格
      tablesHeaderId: true,
      ghCodeBlocks: true, // 支持代码块格式
      splitAdjacentBlockquotes: true, // 拆分相邻块Quote块
      openLinksInNewWindow: true, // 链接到新窗口
      tasklists: true // 支持任务列表
    })
    this.text = converter.makeHtml(markDownText)
  },
  methods: {
    readArticle () {
      this.$router.push('/zone/article')
    }
  }
}
</script>

<style lang = "scss" scoped>
.article {
  background-color: #ffffff;
  padding-bottom: 10px;
  .content {
    background-color: #ffffff;
    padding: 40px;
  }
  .link{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
    padding: 20px;
    .linkItem{
      width: 30%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover{
        color: #58BCB3;
        cursor: pointer;
      }
    }
    .right{
      text-align: right;
    }
  }
}
</style>

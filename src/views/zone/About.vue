<template>
    <div class="about">
      <div class="item1">
        <img class="img" src="../../assets/about/bg.jpg">
      </div>
      <div class="item2">
        <div class="left">
          <p class="title1">ABOUT ME</p>
          <p class="title2">我是{{ author.name }}</p>
          <p class="desc">{{ author.desc1 }}</p>
          <div class="quote">
            <div class="quoteItem1"></div>
            <div class="quoteItem2">{{ author.quote }}</div>
          </div>
          <p class="desc">{{ author.desc2 }}</p>
          <div class="name">{{ author.name }}</div>
          <SocialContact></SocialContact>
        </div>
        <div class="right">
          <p class="title1">CONTACT ME</p>
          <p class="title2">立即联系</p>
          <p class="desc">{{ author.desc3 }}</p>
          <div class="form">
            <div class="formItem">
              <span class="label"><span class="require">*</span>姓名</span>
              <input type="text" placeholder="请输入姓名..." v-model="fromData.name"/>
            </div>
            <div class="formItem">
              <span class="label"><span class="require">*</span>邮箱</span>
              <input type="text" placeholder="请输入邮箱..." v-model="fromData.email"/>
            </div>
            <div class="formItem">
              <span class="label"><span class="require">*</span>内容</span>
              <textarea placeholder="请输入您想说的话..." v-model="fromData.content"/>
            </div>
            <div class="submit">
              <div class="submitBtn">发送</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import SocialContact from './SocialContact'
export default {
  name: 'About',
  components: {
    SocialContact
  },
  data () {
    return {
      author: {
        name: 'itmacy',
        desc1: '前端开发就是一个拼积木的过程，无论是接口，UI组件还是最原始的html和css，开发的过程就是需要把这些零零散散的部件，根据想象力或提供的页面' +
          '，从而把这些零件拼凑起来，最终形成一个灵活且生动的页面。东西越纯粹，完成的页面还原度越高，越能体现一个人的功底。',
        desc2: '是否年级越大，越是活得通透？跟以前相比，发现我更愿意去发现自己的弱点，从而想尽办法去弥补。今天是个值得庆祝的日子，专插本成绩和统考成绩' +
          '都出来了，专插本成功上岸，统考的两科成绩（计算机基础，英语）都是在90分以上，喜悦但表面上又不激动，可能我冷漠惯了。不过对于一个悲观的我来说，确实' +
          '是一件值得鼓舞的事。',
        desc3: '我是itmacy，一个集前端与后端开发的女子，如果有需要分享的内容或共同学习的地方，都可以联系我！！！',
        quote: '前端工程化、模块化以及组件化等，或者各种向后端开发靠近的概念，但别忘了前端最原始的东西，记住最原始的东西，才能更好地运用别人的东西以及封装' +
          '自己的东西，从这个项目确实能体会到组件化所带来的好处：代码复用以至于提到开发效率，但同时给自己留下一个思考：怎么样才能更好的封装自己的代码库？'
      },
      fromData: {
        name: '',
        email: '',
        content: ''
      }

    }
  }
}
</script>

<style scoped lang="scss">
.about{
  background-color: #ffffff;
  .item1{
    .img{
      width: 100%;
      height: 450px;
    }
  }
  .item2{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    flex-wrap: wrap;
    .left{
      width: 45%;
    }
    .right{
      width: 45%;
    }
    .title1{
      color: #58BCB3;
      font-size: 12px;
      font-weight: 900;
    }
    .title2{
      margin-left: 5px;
      font-weight: bold;
    }
    .desc{
      color: #999;
      font-size: 13px;
      line-height: 25px;
      text-indent: 13px;
    }
    .quote{
      font-size: 13px;
      display: flex;
      line-height: 25px;
      .quoteItem1{
        width: 10px;
        height: auto;
        background-color: #58BCB3;
      }
      .quoteItem2{
        background-color: #fafafa;
        padding: 10px;
      }
    }
    .name{
      text-align: right;
      font-family: MyFont,serif;
      font-size: 36px;
      margin-right: 20px;
    }
    .form{
      .formItem{
        padding: 10px;
        display: flex;
        align-items: center;
        .label{
          font-size: 13px;
          color: #58BCB3;
          margin-right: 10px;
          .require{
            color: #D34B62;
          }
        }
        input{
          width: 80%;
          height: 20px;
          padding: 10px 8px;
          font-size: 13px;
          border: 1px solid #eee;
          outline-color: #58BCB3;
        }
        textarea{
          width: 80%;
          height: 100px;
          padding: 10px 8px;
          font-size: 13px;
          border: 1px solid #eee;
          outline-color: #58BCB3;
        }
      }
      .submit{
        position: relative;
        margin-bottom: 50px;
        .submitBtn{
          width: 50px;
          border-radius: 2px;
          padding: 8px;
          background-color: #58BCB3;
          color: #ffffff;
          text-align: center;
          font-size: 13px;
          position: absolute;
          right: 40px;
          cursor: pointer;
        }
      }
    }
  }
}
@media only screen and (max-width: 1500px){
  .about{
    .item1{
      .img{
        height: 250px;
      }
    }
    .item2{
      .left{
        width: 100% !important;
      }
      .right{
        width: 100% !important;
      }
    }
  }
}
</style>

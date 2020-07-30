<template>
    <div class="article">
      <div class="item"  @click="clickItem">
        <div class="item1">
          <img class="img" :src="item.img" >
          <div class="circle">
            <div class="circleItem1">{{ item.month }}</div>
            <div class="circleItem2">{{ item.day}}</div>
          </div>
        </div>
        <div class="item2">
          <div class="title">{{ item.title }}</div>
          <div class="author">{{ item.author? 'by '+item.author: '' }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
</template>

<script>
/**
* 发送的事件
*/
const CLICK_EVENT = 'click'
export default {
  name: 'ArticleCard',
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    clickItem () {
      // this.$router.push('/zone/article')
      this.$emit(CLICK_EVENT, this.item) // 发送点击的事件
    }
  }
}
</script>

<style scoped lang = "scss">
.article{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item{
    width: 250px;
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #eeeeee;
    /*margin-bottom: 15px;*/
    margin-top: 15px;
    padding: 15px 10px;
    cursor: pointer;
    align-self: flex-start;
    text-align: center;
    &:hover{
      box-shadow: 0 0 8px #e5e5e5;
      /*transform:scale(1.02,1.02);*/

      .circle{
        box-shadow: 0 0 10px #eeeeee;
        .circleItem2{
          /*transform: scale(1.5,1.5);*/
        }
      }
      .item2{
        .title{
          font-weight: 900;
        }
      }
    }
    :last-of-type{
      margin: 0;
    }
    .item1{
      position: relative;
      .img{
        border-radius: 5px;
        width: 230px;
        /*height: 230px;*/
      }
      .circle{
        position: absolute;
        top: 87%;
        left: calc(50% - 25px); /* 圆圈水平居中*/
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #58BCB3;
        color: #ffffff;
        text-align: center;
        .circleItem1{
          font-size: 11px;
          margin-bottom: 2px;
          padding-top: 5px;
        }
        .circleItem2{
        }
      }
    }
    .item2{
      font-size: 13px;
      margin-top: 15px;
      padding: 10px;
      .title{
        color: #58BCB3;
        text-align: left;
        font-size: 15px;
        margin: 10px 0;
        font-weight: 700;
      }
      .author{
        text-align: right;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .desc{
        text-align: left;
      }
    }
  }
}
@media only screen and (max-width: 768px) { /* 小于768px时，只显示一个item */
  .article{
    justify-content: center !important;
    width: 100% !important;
  }
  .item{
    width: 80% !important;
    margin: 0 0 15px 0;
  }
}
</style>

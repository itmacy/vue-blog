<template>
    <div class="socialContact">
      <a :href="item.url" target="_blank" v-for="(item,index) in social" :key="index">
        <img class="contact" :src="item.icon" alt="icon"/>
      </a>
    </div>
</template>

<script>
export default {
  name: 'SocialContact',
  data () {
    return {
      social: [
        {
          url: 'https://github.com/itmacy',
          icon: require('../../assets/contact/github.png')
        },
        {
          url: 'https://www.baidu.com',
          icon: require('../../assets/contact/wechat.png')
        },
        {
          url: 'https://www.baidu.com',
          icon: require('../../assets/contact/QQ.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.socialContact{
  .contact{
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
}
</style>

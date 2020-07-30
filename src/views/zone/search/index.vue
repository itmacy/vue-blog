<template>
  <div class="search">
    <div class="searchDiv">
      <img class="searchIcon" src="../../../assets/mobile/search.png" width="25px" height="25px" alt="搜索图标" @click="search">
      <input class="searchInput" type="text" placeholder="search..." v-model="keyword" @change="search">
    </div>
  </div>
</template>

<script>
/**
 *  发送的事件
 */
const SEARCH = 'search'
export default {
  name: 'index',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search () {
      if (!this.keyword) {
        return
      }
      this.$emit(SEARCH, this.keyword)
      this.keyword = ''
    }
  }
}
</script>

<style scoped lang="scss">
.search{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.searchDiv{
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  .searchIcon{
    margin-right: -20px;
    z-index: 66;
    cursor: pointer;
  }
  .searchInput{
    width: 100%;
    height: 30px;
    border-radius: 4px;
    padding: 2px 30px;
    border: 2px solid #999;
    outline: none; /* 去除外边框  */
    font-size: 14px;
    color: #666;
    margin-left: -10px;
  }
}
</style>

<template>
  <div class="mobileTop">
    <div class="btnGroup" v-show="showBtn">
      <div class="menuBtn" @click="openMenu">
        <img src="../../../assets/mobile/fold.png" width="25px" height="25px" alt="fold"/>
      </div>
      <div class="searchBtn" @click="openSearch">
        <img src="../../../assets/mobile/search.png" width="25px" height="25px" alt="fold"/>
      </div>
    </div>
    <div class="showSearch" v-show="showSearch">
      <Search class="search" @search="search"></Search>
      <div @click="searchCancel">
        <img src="../../../assets/mobile/searchCancel.png" width="25px" height="25px"/>
      </div>
    </div>
    <el-drawer
      :withHeader = "false"
      :show-close = "false"
      size = "60%"
      :visible.sync="showDrawer"
      direction="ltr"
      :before-close="handleClose">
      <div class="nav">
        <div v-for="(item, index) in routes" :key="index" @click="hideDrawer">
          <router-link  :to="item.route" >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Search from '../search/'
/**
 * 发送的事件
 */
const SEARCH = 'search'
export default {
  name: 'MobileSearch',
  components: {
    Search
  },
  data () {
    return {
      showBtn: true,
      showSearch: false,
      showDrawer: false,
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
      ]
    }
  },
  methods: {
    openMenu () {
      this.showDrawer = !this.showDrawer
    },
    hideDrawer () {
      console.log('test')
      this.showDrawer = !this.showDrawer
    },
    search (val) {
      // console.log('搜索的关键字：', val)
      this.$emit(SEARCH, val)
    },
    openSearch () {
      this.showBtn = !this.showBtn
      this.showSearch = !this.showSearch
    },
    searchCancel () {
      this.showBtn = !this.showBtn
      this.showSearch = !this.showSearch
    },
    handleClose () {
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>

<style scoped lang="scss">
.mobileTop{
  background-color: #ffffff;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0 0 5px #eeeeee;
  margin-bottom: 10px;
  .btnGroup{
    display: flex;
    justify-content: space-between;
  .menuBtn{
  }
  .searchBtn{
  }
  }
  .showSearch{
    display: flex;
    align-items: center;
    justify-content: space-around;
  .search{
    width: 90%;
    height: 25px;
    }
  }
  .nav {
    padding: 20px 10px;
    a {
      font-weight: bold;
      color: #2c3e50;
      padding: 10px;
      text-decoration: none;
      display: block;

      &.router-link-exact-active {
        color: #58BCB3;
      }
      &:hover{
        color: #58BCB3;
      }
    }
  }
}
</style>

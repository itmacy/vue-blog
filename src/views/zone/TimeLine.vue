<template>
    <div class="timeLine">
      <el-timeline>
        <el-timeline-item
          v-for="(item, index) in itemList"
          :key="index"
          :timestamp="item.date"
          placement="top"
          :color="index === 0? '#58BCB3': '#E4E7ED'">
          <div @click="readArticle">
            <el-card shadow="hover">
              <h4>{{item.title}}</h4>
              <p>{{item.author}} 发表于{{item.date}}</p>
            </el-card>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
</template>

<script>
export default {
  name: 'TimeLine',
  components: {
  },
  created () {
  },
  data () {
    return {
      show: false,
      itemList: [
        {
          date: '2020-7-29',
          title: 'Java',
          author: 'itmacy'
        },
        {
          date: '2020-6-02',
          title: 'Javascript',
          author: 'itmacy'
        },
        {
          date: '2020-5-20',
          title: 'Python',
          author: 'itmacy'
        },
        {
          date: '2020-4-28',
          title: 'Groovy',
          author: 'itmacy'
        },
        {
          date: '2020-3-10',
          title: 'Scala',
          author: 'itmacy'
        }
      ]
    }
  },
  methods: {
    readArticle () {
      console.log('点击详情')
      this.$router.push('/zone/article')
    }
  }
}
</script>

<style scoped lang="scss">
.timeLine{
  padding-right: 30px;
}
</style>

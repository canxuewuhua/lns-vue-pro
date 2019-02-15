<template>
  <el-card>
    <div id="vue">Hello Vue.js! {{ message }}</div>
    <div>
      <el-button type="primary" icon="el-icon-upload" style="margin-left: 0.1rem;margin-top: 0.3rem" @click="loadCollectionRecordList">搜索</el-button>
    </div>
  </el-card>
</template>
<script type="text/javascript">
export default {
  name: '',
  data () {
    return {
      message: '啦啦啦啦啦'
    }
  },
  mounted () {
    // this.loadCollectionRecordList()
  },

  methods: {
    loadCollectionRecordList () {
      alert('123')
    }
  }
}
</script>

<style type="text/css">
  #vue{
    color: green;
    font-size: 28px;
  }
</style>

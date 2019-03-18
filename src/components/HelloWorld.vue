<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <el-row :gutter="24">
      <el-col :span="4"><div class="grid-content bg-purple"> <span>Essential Links</span></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloFirst">数据双向绑定</router-link></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloSecond">v-if的使用</router-link></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloVFor">v-for的使用</router-link></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloCompute">计算属性使用</router-link></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloWatch">监听属性使用</router-link></div></el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloSlot">跳转至HelloSlot</router-link></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  export default {
    components: {ElRow},
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 30px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

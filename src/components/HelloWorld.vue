<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row :gutter="24">
      <el-col :span="4"><div class="grid-content bg-purple"> Essential Links</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloVue">跳转至HelloVue</router-link></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloTest">跳转至HelloTest</router-link></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloSwitch">跳转至HelloSwitch</router-link></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><router-link to="day01/HelloWatch">跳转至HelloWatch</router-link></div></el-col>
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
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

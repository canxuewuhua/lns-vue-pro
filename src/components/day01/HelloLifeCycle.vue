<template>
  <div ref="app">
    <h1>{{message}}</h1>
    <el-input style="width: 30rem" v-model="message"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Vue的生命周期',
      }
    },
  beforeCreate: function() {
    console.group('------beforeCreate创建前状态------');
    console.log("%c%s", "color:red" , "app     : " + this.$refs.app); //undefined
    console.log("%c%s", "color:red","data   : " + this.$data); //undefined
    console.log("%c%s", "color:red","message: " + this.message)
  },
    created: function() {
      console.group('------created创建完毕状态------');
      console.log("%c%s", "color:red","app     : " + this.$refs.app); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount: function() {
      console.group('------beforeMount挂载前状态------');
      console.log("%c%s", "color:red","app     : " + this.$refs.app); //undefined
      console.log(this.$refs.app);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    mounted: function() {
      console.group('------mounted 挂载结束状态------');
      console.log("%c%s", "color:red","app     : " + this.$refs.app); //已被初始化
      console.log(this.$refs.app);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red","app     : " + this.$refs.app);
      console.log(this.$refs.app);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
    },
    updated: function () {
      console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red","app     : " + this.$refs.app);
      console.log(this.$refs.app);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red","app     : " + this.$refs.app);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
    },
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red","app     : " + this.$refs.app);
      console.log(this.$refs.app);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message)
    }
  }
</script>

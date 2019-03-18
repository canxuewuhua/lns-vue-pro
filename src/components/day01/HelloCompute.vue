<template>
  <div id="app">
    <p>原始字符串: {{ message }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
    <el-input style="width: 30rem" v-model="message"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Runoob!'
      }
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>

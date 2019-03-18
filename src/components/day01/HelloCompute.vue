<template>
  <div id="app">
    <p>我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，
      在重新渲染的时候，函数总会重新调用执行。 </p>
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
        // splite(' ')可以将字符串按某个字符或者其他分割。返回数组
        // reverse()该方法会改变原来的数组，而不会创建新的数组。此函数可以将数组倒序排列
        // join()方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。指定分隔方法join(' ')
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>

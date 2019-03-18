<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <el-input style="width: 30rem" v-model="msg"/>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<template>
  <div>
    <el-input v-model="demo"></el-input>
    <h3><span>通过watch来直接监测demo，如果demo的值变化，value的值也会跟着一起变化</span></h3>
    {{value}}
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'index',
    data () {
      return {
        demo: '',
        value: ''
      }
    },
    watch: {
      demo(val) {
        this.value = this.demo;
      }
    },
    mounted () {

    },

    methods: {

    }
  }
</script>

<style type="text/css">
</style>

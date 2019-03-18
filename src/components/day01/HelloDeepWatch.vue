<template>
  <div>
      <input v-model="example0"/>
　　  <input v-model="example1.inner0"/>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'index',
    data () {
      return {
        example0: "",
        example1: {
          inner0: 1,
          innner1: 2
        }
      }
    },
    watch: {
      example0(curVal, oldVal){
        console.log(curVal, oldVal);
      },
      example1: {
        //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
        handler(curVal, oldVal){
          console.log(curVal, oldVal)
        },
        //deep:true
      },
      methods:{
      }
    }
  }
</script>

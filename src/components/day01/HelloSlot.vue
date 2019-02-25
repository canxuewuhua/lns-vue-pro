<template>
  <div id="app">
    <test-slot>
      <span>我是父组件里的文字，但是我要被放到子组件里</span>
    </test-slot>
  </div>
</template>
<script> import testSlot from './testSlot'
export default {
  components: {testSlot},
  data(){
    return {}
  }
}
</script>
<style></style>

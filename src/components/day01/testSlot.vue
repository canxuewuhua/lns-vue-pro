<template>
  <div>
    <!--//父组件里的span会替换掉slot所以这里的123是看不见的 //如果父组件在使用子组件testSlot的时候不在里面加内容则这里的slot会显示出来-->
    <!--必须要在子组件中声明slot 标签  ，如果子组件模板不包含<slot>插口，父组件的内容将会被丢弃-->
    <h3>test-slot</h3>
    <slot>123</slot>
  </div>
</template>
<script> export default {
  data(){
    return {}
  }
} </script>
<style></style>

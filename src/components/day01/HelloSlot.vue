<template>
  <div id="app">
    <!--
    如果要父组件在子组件中插入内容 ，必须要在子组件中声明slot 标签  ，如果子组件模板不包含<slot>插口，父组件的内容<p>{{msg}}</p>将会被丢弃;；

     当slot存在默认值<slot><p>默认值</p></slot>，且父元素在<slotshow></slotshow>中没有要插入的内容时，会显示<p>默认值</p>（p标签会去掉），
     当slot存在默认值，且父元素在<child>中存在要插入的内容时，则显示父组件中设置的值
    -->
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

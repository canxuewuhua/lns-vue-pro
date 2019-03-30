<template>
  <div class="father">
    <!--
    具名插槽
    匿名插槽没有名称属性，所以是匿名插槽，那么，插槽加了名称属性，就变成了具名插槽;
    具名插槽可以在一个组件中出现Ñ次，出现在不同的位置
    -->
    <h3>这里是父组件</h3>
    <slotChild>
      <div class="tmpl" slot="up">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
      <div class="tmpl" slot="down">
        <span>菜单-1</span>
        <span>菜单-2</span>
        <span>菜单-3</span>
        <span>菜单-4</span>
        <span>菜单-5</span>
        <span>菜单-6</span>
      </div>
      <div class="tmpl">
        <span>菜单->1</span>
        <span>菜单->2</span>
        <span>菜单->3</span>
        <span>菜单->4</span>
        <span>菜单->5</span>
        <span>菜单->6</span>
      </div>
    </slotChild>
  </div>
</template>
<script> import slotChild from './SlotChild'
export default {
  components: {slotChild},
  data(){
    return {}
  }
}
</script>
<style></style>

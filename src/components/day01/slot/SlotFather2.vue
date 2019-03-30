<template>
  <div class="father">
    <h3>这里是父组件</h3>
    <!--
    第一次使用：用flex展示数据
    子组件可以将自己的数据发送给父组件
    注：

    1、父组件改变了，想让子组件中的某个方法也执行，使用 this.$refs.infoLink.loadRelationshipList()
       这种形式适合在一个页面中嵌套了一个组件<infoLink ref="infoLink" :baseTemplate="baseTemplate" :actionResultOptions="actionResultOptions"></infoLink>

    2、父组件可以使用 props 把数据传给子组件
    3、子组件可以使用 $emit 触发父组件的自定义事件，这种像list页面和详情页的关系；（TODO）感觉正好相反

    作用域插槽
    具有特殊属性 scope 的 <template> 元素必须存在，表示它是作用域插槽的模板；scope 的值对应一个临时变量名，此变量接收从子组件中传递的 props 对象
    -->
    <slotChild2>
      <template slot-scope="user">
        <div class="tmpl">
          <span v-for="item in user.data">{{item}}</span>
        </div>
      </template>

    </slotChild2>

    <!--第二次使用：用列表展示数据-->
    <slotChild2>
      <template slot-scope="user">
        <ul>
          <li v-for="item in user.data">{{item}}</li>
        </ul>
      </template>

    </slotChild2>

    <!--第三次使用：直接显示数据-->
    <slotChild2>
      <template slot-scope="user">
        {{user.data}}
      </template>

    </slotChild2>

    <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
    <slotChild2>
      我就是模板
    </slotChild2>
  </div>
</template>
<script> import slotChild2 from './SlotChild2'
export default {
  components: {slotChild2},
  data(){
    return {}
  }
}
</script>
<style></style>

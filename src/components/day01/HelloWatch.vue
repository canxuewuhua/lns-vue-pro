<template>
  <el-card>
    <div>
      <el-input v-model="demo"></el-input>
      <h3><span>通过watch来直接监测demo，如果demo的值变化，value的值也会跟着一起变化</span></h3>
      {{value}}
    </div>
    <div>
      <el-input v-model="employee.name"></el-input>
      {{employeeName}}
    </div>
    <div>
      <p>FullName: {{fullName}}</p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
    </div>
    <div>
      <!--//观察数据为字符串或数组-->
      <input v-model="example0"/>
      <input v-model="example1"/>
      <!--　　//当单观察数据examples2为对象时，如果键值发生变化，为了监听到数据变化，需要添加deep:true参数-->
      <input v-model="example2.inner0"/>
    </div>
  </el-card>
</template>
<script type="text/javascript">
  export default {
    name: 'index',
    data () {
      return {
        demo: '',
        value: '',
        employee: {
          name: ''
        },
        employeeName: '',
        firstName: 'Dawei',
        lastName: 'Lou',
        fullName: '',

        example0: "",
        example1: "",
        example2: {
          inner0: 1,
          innner1: 2
        }
      }
    },
    computed: {
      newName() {
        return this.employee.name;
      }
    },
    watch: {
      demo(val) {
        this.value = this.demo;
      },
      newName(val) {
        this.employeeName = val;
      },
//      firstName(newName, oldName) {
//        this.fullName = newName + ' ' + this.lastName;
//      }

      firstName: {
        handler(newName, oldName) {
          this.fullName = newName + ' ' + this.lastName;
        },
        // immediate=true代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
        immediate: true
      },

      example0(curVal, oldVal){
        console.log(curVal, oldVal);
      },
      example1: 'a',//值可以为methods的方法名
      example2: {
        //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
        // 注：观察的数据为对象，可使用在在子页面接收来自父页面的对象的场景，父页面的对象变化了，子页面也跟随者变化
        // deep的意思就是深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器，但是这样性能开销就会非常大了，任何修       // 改obj里面任何一个属性都会触发这个监听器里的 handler。
        // 可以优化，我们可以是使用字符串形式监听。
        handler(curVal, oldVal)
        {
          console.log(curVal, oldVal)
        }
        ,
        deep: true
      }
    },
    mounted()
    {
    }
    ,

    methods: {
      a(curVal, oldVal){
        console.log(curVal, oldVal)
      }
    }
  }
</script>

<style type="text/css">
</style>

<template>
  <el-card>
    <div id="vue">Hello Vue.js! {{ message }}</div>
    <div>
      <el-button type="primary" icon="el-icon-upload" style="margin-left: 0.1rem;margin-top: 0.3rem"
                 @click="loadCollectionRecordList">搜索
      </el-button>
    </div>
    <div v-for="item in cityList">
      <div>城市名称：{{item.title}}</div>
      <div>城市ID：{{item.id}}</div>
    </div>
    <div>
      <p v-if="seen">现在你看到我了</p>

      <h1 style="font-size: 1px">v-if适合在条件不太可能变化时使用，v-show适合频繁切换</h1>
      <h1 v-show="ok">Hello!</h1>
      <h2 ref='foo'>我是ref的值</h2>
    </div>
    <div>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="20"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <div>
      <input v-model="test.text">
    </div>
    <div>
      <el-popover
        placement="top"
        width="160"
        v-model="visible2">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
          <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
        </div>
        <el-button slot="reference">删除</el-button>
      </el-popover>
    </div>
  </el-card>
</template>
<script type="text/javascript">
  export default {
    name: '',
    data () {
      return {
        message: '啦啦啦啦啦',
        seen:false,
        ok: true,
        visible2: false,
        value2: true,
        cityList: [{
          title: '北京',
          id: 1
        },
          {
            title: '上海',
            id: 2
          }],
        test: {
          text1: '',
          text2: ''
        }
      }
    },
    watch:{
      testText1: {
        dosomething (newVal,oldVal){
          console.log('newValue', newVal);
          console.log('oldValue', oldVal.text);
        }
      }
    },
    mounted () {
      // this.loadCollectionRecordList()
    },
    computed:{
      testText1 () {
        return this.test.text1
      }
    },

    methods: {
      loadCollectionRecordList () {
        alert('123');
      },
      // 点击开启开关
      handelUpdate (autoUpdate) {
          debugger
        let strOpen = '是否确认开启开关。'
        let strClose = '是否确认关闭开关。'
        if (!autoUpdate) {
          // 弹窗询问，这个是封装过的element ui 弹窗
          this.$confirm('开启开关', strOpen, () => {
            this.autoUpdate = true
          })
        } else {
          this.$confirm('关闭开关', strClose, () => {
            this.autoUpdate = false
          })
        }
      },
    }
  }
</script>

<style type="text/css">
  #vue {
    color: green;
    font-size: 28px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-switch.is-disabled .el-switch__core, .el-switch.is-disabled .el-switch__label{
    cursor: pointer;
  }
</style>

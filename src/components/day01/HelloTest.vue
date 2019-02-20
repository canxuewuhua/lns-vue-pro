<template>
  <el-card>
    <div id="vue">
      <el-table :data="contractInfo" class="kstable" border>
        <el-table-column label="借据号" prop="contractCode"></el-table-column>
        <el-table-column label="客户编号" prop="customerCode"></el-table-column>
        <el-table-column label="姓名" prop="customerName" width="180px"></el-table-column>
        <el-table-column label="身份证号" prop="identityCard"></el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
        <el-table-column label="操作" header-align="center" style="text-align: center;">
          <template slot-scope="scope">
            <el-switch
            v-model="scope.row.useStatus"
            active-color="#13ce66"
            active-value="1"
            inactive-value="0"
            :disabled="switchDisabled"
            slot="reference"
            @click.native="useStatusChange(scope)">
            </el-switch>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </el-card>
</template>
<script type="text/javascript">
  export default {
    name: '',
    data () {
      return {
        message: 'Hello World',
        contractInfo:[],
        switchDisabled:true
      }
    },

    mounted () {
      this.loadCollectionRecordList()
    },

    methods: {
      loadCollectionRecordList () {
        this.contractInfo = [{"contractCode":"1111","customerCode":"222222","customerName":"zhangsan","identityCard":"41282919","phone":"176","useStatus":"true"},
          {"contractCode":"2222","customerCode":"333333","customerName":"lisi","identityCard":"21282919","phone":"187","useStatus":"true"}]
      },
      useStatusChange(scope){
        debugger
        this.switchDisabled = true;
        this.$confirm('确认要删除吗？删除后无法恢复！', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.switchDisabled = false;
          this.$message.success("操作成功");
        });
      }
    }
  }
</script>

<style type="text/css">
  #vue {
    color: green;
    font-size: 28px;
  }
  .el-switch.is-disabled .el-switch__core, .el-switch.is-disabled .el-switch__label{
    cursor: pointer;
  }
</style>

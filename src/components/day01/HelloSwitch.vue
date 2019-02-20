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
            <el-popover title="确认" placement="top" width="200" v-model="scope.row.delVisible">
              <p>确认要删除该应用吗？删除后无法恢复！</p>
              <div style="text-align: right; margin: 0">
                <el-button size="small" type="text" @click="scope.row.delVisible=false">取消</el-button>
                <el-button type="primary" size="small" @click="useStatusChange(scope)">确定</el-button>
              </div>
              <span slot="reference" style="margin-left: .10rem">
          <el-switch
            v-model="scope.row.useStatus"
            active-color="#13ce66"
            active-value="1"
            inactive-value="0"
            slot="reference"
            :disabled='isDisabled'>
          </el-switch>
        </span>
            </el-popover>

          </template>
        </el-table-column>
      </el-table>
    </div>

  </el-card>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        message: 'Hello World',
        contractInfo: [],
        switchDisabled: true,
        isDisabled: true,
      }
    },
    mounted () {
      this.loadCollectionRecordList()
    },

    methods: {
      loadCollectionRecordList () {
        this.contractInfo = [{
          "contractCode": "1111",
          "customerCode": "222222",
          "customerName": "zhangsan",
          "identityCard": "41282919",
          "phone": "176",
          "useStatus": "0"
        },
          {
            "contractCode": "2222",
            "customerCode": "333333",
            "customerName": "lisi",
            "identityCard": "21282919",
            "phone": "187",
            "useStatus": "1"
          }]
      },
      useStatusChange(scope){
        let status = scope.row.useStatus;
        if (status==="1"){
          scope.row.useStatus = "0" ;
        }else if(status==="0"){
          scope.row.useStatus = "1" ;
        }
        scope.row.delVisible=false;
      },
    }
  }
</script>

<style type="text/css">
  #vue {
    color: green;
    font-size: 28px;
  }

  .el-switch.is-disabled .el-switch__core, .el-switch.is-disabled .el-switch__label {
    cursor: pointer;
  }
</style>

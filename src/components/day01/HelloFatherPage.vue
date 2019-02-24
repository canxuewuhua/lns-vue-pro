<template>
  <el-card>
    <div>
      <div>父组件的toCity{{toCity}}</div>
      <train-city @showCityName="updateCity" :sendData="toCity"></train-city>
    </div>
  </el-card>
</template>
<script type="text/javascript">
  import TrainCity from "./train-city";
  export default {
    name:'index',
    components: {TrainCity},
    data () {
      return {
        toCity:"北京"
      }
    },
    mounted () {
    },

    methods: {
      updateCity(data){//触发子组件城市选择-选择城市的事件
        this.toCity = data.cityname;//改变了父组件的值
        console.log('toCity:'+this.toCity)
      }
    }
  }
</script>

<style type="text/css">
  #vue {
    color: green;
    font-size: 28px;
  }
</style>

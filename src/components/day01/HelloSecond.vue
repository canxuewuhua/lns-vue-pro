<template>
  <p v-if="seen">现在你看到我了</p>

    <!--<div v-if="Math.random() > 0.5">-->
      <!--Sorry-->
    <!--</div>-->
    <!--<div v-else>-->
      <!--Not sorry-->
    <!--</div>-->


  <!--<div v-if="type === 'A'">-->
    <!--A-->
  <!--</div>-->
  <!--<div v-else-if="type === 'B'">-->
    <!--B-->
  <!--</div>-->
  <!--<div v-else-if="type === 'C'">-->
    <!--C-->
  <!--</div>-->
  <!--<div v-else>-->
    <!--Not A/B/C-->
  <!--</div>-->
</template>

<script>
  export default {
    data () {
      return {
        seen: true,
        //type: 'C'
      }
    }
  }
</script>

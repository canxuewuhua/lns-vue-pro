<template>
  <div id="app">
    <ol>
      <li v-for="site in sites">
        {{ site.name }}
      </li>
    </ol>
    <ul>
      <li v-for="n in 10">
        {{ n }}
      </li>
    </ul>
    <ul>
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sites: [
          { name: 'Runoob' },
          { name: 'Google' },
          { name: 'Taobao' }
        ],
        object: {
          name: '菜鸟教程',
          url: 'http://www.runoob.com',
          slogan: '学的不仅是技术，更是梦想！'
        }
      }
    }
  }
</script>

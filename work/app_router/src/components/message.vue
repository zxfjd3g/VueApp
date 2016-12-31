<template>
  <ul>
    <li v-for="message in messageArr">
      <a v-link="{path:'/home/message/mdetail/'+message.id}">{{message.title}}</a>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        messageArr: [
          {id:1, title: 'title01'},
          {id:2, title: 'title02'},
          {id:3, title: 'title03'},
          {id:4, title: 'title04'}
        ]
      }
    }
  }
</script>

<style>

</style>

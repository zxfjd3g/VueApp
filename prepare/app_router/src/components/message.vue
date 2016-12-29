<template>
  <div>
    <ul>
      <li v-for="m in messages">
        <a v-link="{path: '/home/message/mdetail/'+m.id}">{{m.title}}</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        messages: []
      }
    },
    created () {
      this.messages = [
        {id: 1, title: 'messsage01'},
        {id: 2, title: 'messsage02'},
        {id: 3, title: 'messsage03'},
        {id: 4, title: 'messsage04'}
      ]
    }
  }
</script>

<style>

</style>

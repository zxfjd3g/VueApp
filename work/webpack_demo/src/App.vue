<template>
  <hello></hello>
  <img src="assets/logo.png">
  <div class="content">{{msg}}</div>
</template>

<script>
  import Hello from './components/Hello.vue'

  export default {
    data () {
      return {
        msg: 'App component msg'
      }
    },
    components: {Hello}
  }
</script>

<style>
  .content {
    color: red;
    font-size: 20px;
  }
</style>

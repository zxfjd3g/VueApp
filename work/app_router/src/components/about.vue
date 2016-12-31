<template>
  <div>
    <h1>About</h1>
    <div>About route component content</div>
    {{msg}}
  </div>

</template>


<script type="text/ecmascript-6">
  export default {

    props: ['msg'],
    /*data () {
      return {
        msg: 'atguigu.com'
      }
    }*/
    created() {
      console.log(this.msg)
    }
  }
</script>

<style>

</style>

<template>
  <div>
    <h2>About</h2>
    <div>{{msg}}</div>
    <div>{{propName}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['propName'],
    data () {
      return {
        msg: 'About route component!'
      }
    }
  }
</script>

<style>

</style>

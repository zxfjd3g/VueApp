<template>
  <div>{{name}}---{{age}}---{{setName()}}</div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['name', 'age', 'setName']

  }
</script>

<style>

</style>

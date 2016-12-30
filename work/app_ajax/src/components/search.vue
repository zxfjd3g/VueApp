<template>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="searchName"/>
    <button @click="search">Search</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['setSearchName'],
    data () {
      return {
        searchName: ''
      }
    },
    methods: {
      search () {
        const searchName = this.searchName && this.searchName.trim()
        if(searchName) {
          this.setSearchName(searchName)
        }
      }
    }
  }
</script>

<style>

</style>

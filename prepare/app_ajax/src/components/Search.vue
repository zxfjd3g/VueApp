<template>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="searchName"/>
    <button @click="handleClick">Search</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['setSearchName'],

    data () {
      return {
        searchName: null
      }
    },

    methods: {
      handleClick() {
        const searchName = this.searchName && this.searchName.trim()
        if(searchName) {
          this.setSearchName(this.searchName)
        }
      }
    }
  }
</script>

<style>

</style>

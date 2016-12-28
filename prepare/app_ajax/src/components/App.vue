<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <search :set-search-name="setSearchName"></search>
    </section>
    <user-list :search-name="searchName"></user-list>
  </div>
</template>

<script>
  import Search from './Search.vue'
  import UserList from './UserList.vue'

  export default {
    data () {
      return {
        searchName: ''
      }
    },
    methods: {
      setSearchName(searchName) {
        this.searchName = searchName
      }
    },
    components: {Search, UserList}
  }
</script>

<style>
</style>

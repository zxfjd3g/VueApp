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
  import search from './search'
  import userList from './userList'

  export default {

    data () {
      return {
        searchName: null
      }
    },

    methods: {
      setSearchName (searchName) {
        this.searchName = searchName
      }
    },
    components: {search, userList}
  }
</script>

<style>

</style>

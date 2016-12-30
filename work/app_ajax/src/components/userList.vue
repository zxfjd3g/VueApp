<template>
  <h2 v-show="firstView">input searchName start Search</h2>
  <h2 v-show="loading">LOADING....</h2>
  <h2 v-if="error">{{error}}</h2>
  <div v-show="users" class="row">
    <div class="card" v-for="user in users">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['searchName'],
    data () {
      return {
        firstView: true,
        loading: false,
        users: null,
        error: null
      }
    },

    computed: {
      searchName: {
        set(value) { //当searchName的值发生改变时自动调用--->发请求
          //更新状态
          this.firstView = false
          this.loading = true
          //发ajax请求
          const url = `https://api.github.com/search/users?q=${value}`
          this.$http.get(url).then(
            response => {
              console.log(response)
              this.loading = false
              this.users = response.data.items
            },
            response => {
              console.log(response)
              this.loading = false
              this.error = response.statusText
            }
          )
        }
      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>

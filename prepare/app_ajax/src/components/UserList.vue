<template>
  <h2 v-show="firstView">Enter name to search</h2>
  <h2 v-show="loading">Loading result...</h2>
  <h2 v-show="error">{{error}}</h2>
  <div class="row" v-show="users">
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
    props: {
      searchName: {
        type: String
      }
    },
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
        set(name) {
          this.firstView = false
          this.loading = true
          //发送ajax请求, 更新界面
          const url = `https://api.github.com/search/users?q=${name}`;
          this.$http.get(url).then((response) => {
            console.log(response)
            this.loading = false
            this.users = response.data.items
          }, (response) => {
            console.log(response)
            this.loading = false
            this.error = response.statusText
          });
        }
      }
    },
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

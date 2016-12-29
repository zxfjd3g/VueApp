<template>
  <div>
    <h2>Home</h2>
    <div>Home route component!<input type="text"></div>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <a v-link="{path: '/home/news'}">News</a>
        </li>
        <li>
          <a v-link="{path: '/home/message'}">Message</a>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style>

</style>

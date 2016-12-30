<template>
  <li :style="{background: bgColor}" @mouseenter="changeState(true)" @mouseleave="changeState(false)">
    <label>
      <input type="checkbox" v-model="todo.isDone"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShown" @click="deleteItem">删除</button>
    <button class="btn btn-danger" v-show="isShown" @click="deleteItem2">删除2</button>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['todo', 'deleteTodo'],

    data () {
      return {
        bgColor: '#fff',
        isShown: false
      }
    },

    methods: {
      changeState (isEnter) {
        if (isEnter) {
          this.bgColor = '#eee'
        } else {
          this.bgColor = '#fff'
        }
        this.isShown = isEnter
      },
      deleteItem () {
        const {deleteTodo, todo} = this
        /* eslint-disable no-undef */
        if (confirm(`确定删除${todo.title}吗?`)) {
          deleteTodo(todo)
        }
      },
      deleteItem2 () {
        // 删除当前todo: 触发删除todo的事件
        this.$dispatch('delete', this.todo)
      }
    }
  }
</script>

<style>

</style>

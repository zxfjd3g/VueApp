<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :todos="todos"></todo-header>
      <todo-main :todos="todos" :delete-todo="deleteTodo"></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
  import todoHeader from './todoHeader'
  import todoMain from './todoMain'
  import todoFooter from './todoFooter'

  export default {

    data () {
      return {
        todos: [{isDone: false, title: '吃饭3'}, {isDone: true, title: '睡觉3'}]
      }
    },

    methods: {
      deleteTodo (todo) {
        this.todos.$remove(todo)
      }
    },
    components: {todoHeader, todoMain, todoFooter}
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

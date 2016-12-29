<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllDone"/>
    </label>
    <span>
      <span>已完成{{doneCount}}</span> / 全部{{totalCount}}
    </span>
    <button class="btn btn-danger" @click="deleteDone">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    props: ['todos', 'updateTodos', 'deleteDone'],

    computed: {
      isAllDone: {
        get() {
          return this.todos.filter(todo => !todo.isDone).length===0 && this.todos.length>0
        },
        set(value) {
          this.updateTodos(value)
        }
      },
      doneCount () {
        return this.todos.filter(todo => todo.isDone).length
      },
      totalCount () {
        return this.todos.length
      }
    },
  }
</script>

<style>

</style>

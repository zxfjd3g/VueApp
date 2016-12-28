<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user"><span>{{comment.username}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      comment: {
        type: Object,
        required: true
      },
      deleteComment: {
        type: Function,
        required: true
      }
    },
    methods: {
      deleteItem () {
        const username = this.comment.username
        if(confirm(`确定删除${username}的评论?`)) {
          this.deleteComment(this.comment)
        }
      }
    }
  }
</script>

<style>

</style>

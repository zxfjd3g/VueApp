<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="comment in comments">
        <comment-item :delete-comment="deleteComment" :comment="comment"></comment-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import CommentItem from './CommentItem.vue'
  export default {
    props: {
      comments: {
        type: Array
      },
      deleteComment: {
        type: Function
      }
    },
    components: {CommentItem}
  }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }
</style>

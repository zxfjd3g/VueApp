<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <comment-add :add-comment="addComment"></comment-add>
      <comment-list :comments="comments" :delete-comment="deleteComment"></comment-list>
    </div>
  </div>
</template>

<script>
  import CommentAdd from './CommentAdd.vue'
  import CommentList from './CommentList.vue'
  export default {

    data () {
      return {
        comments: [
        {
          username: "Tom22",
          content: "ReactJS好难啊!",
          id: Date.now()
        },
        {
          username: "JACK",
          content: "ReactJS还不错!",
          id: Date.now() + 1
        }
      ]
      }
    },

    methods : {
      //增加评论
      addComment (comment) {
        this.comments.unshift(comment)
      },
      //删除评论
      deleteComment (comment) {
        this.comments.$remove(comment)
      }
    },



    components: {CommentAdd, CommentList}
  }
</script>

<style>
</style>

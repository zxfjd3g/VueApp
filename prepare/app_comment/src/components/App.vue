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
        comments: []
      }
    },

    created () {
      this.comments = [
        {
          username: "Tom",
          content: "ReactJS好难啊!",
          id: Date.now()
        },
        {
          username: "JACK",
          content: "ReactJS还不错!",
          id: Date.now() + 1
        }
      ]
    },

    components: {CommentAdd, CommentList},

    methods: {
      addComment(comment) {
        this.comments.unshift(comment)
      },
      deleteComment(comment) {
        this.comments.$remove(comment)
      }
    }
  }
</script>

<style>
</style>

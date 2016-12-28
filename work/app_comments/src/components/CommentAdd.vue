<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="comment.username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comment.content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addItem">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      addComment: {
        type: Function,
        required: true
      }
    },

    data () {
      return {
        comment: {}
      }
    },

    methods: {
      addItem () {
        const comment = this.comment
        comment.id = Date.now()
        this.addComment(comment)
        this.comment = {}
      }
    }
  }
</script>

<style>

</style>

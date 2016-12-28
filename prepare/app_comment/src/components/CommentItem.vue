<template>
  <div class="handle">
    <a href="javascript:;" @click="deleteItem">删除</a>
  </div>
  <p class="user"><span>{{comment.username}}</span><span>说:</span></p>
  <p class="centence">{{comment.content}}</p>
</template>

<script>
  export default {
    props: {
      comment: {
        type: Object
      },
      deleteComment: {
        type: Function
      }
    },
    methods: {
      deleteItem() {
        const username = this.comment.username
        if (confirm(`确定要删除${username}的评论吗?`)) {
          this.deleteComment(this.comment)
        }
      }
    }
  }
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>

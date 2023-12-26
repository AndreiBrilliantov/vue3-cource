<template>
  <div class="post">
    <div>{{ listTitle }}: {{ post.title }}</div>
    <div>{{ listBody }}: {{ post.body}}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    listTitle: {
      type: Text,
    },
    listBody: {
      type: Text
    }
  }
}
</script>

<style scoped>
.post {
  padding: 5px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
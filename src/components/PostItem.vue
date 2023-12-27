<template>
  <div class="post">
    <div>
      <div><strong>{{ post.id }}</strong></div>
      <div>{{ listTitle }}: {{ post.title }}</div>
      <div>{{ listBody }}: {{ post.body}}</div>
    </div>
    <div class="post__btns">
      <my-button
          @click="$emit('remove', post)"
      >
        Delete
      </my-button>
    </div>
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
      type: String,
    },
    listBody: {
      type: String
    }
  }
}
</script>

<style scoped>
.post {
  padding: 5px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
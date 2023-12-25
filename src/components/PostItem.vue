<template>
  <div class="post">
    <div>Post Name: {{ post.title }}</div>
    <div>Post Description: {{ post.body}}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
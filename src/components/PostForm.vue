<template>
  <form @submit.prevent>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Title"
    >
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Body"
    >
    <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost"
    >
      Create
    </my-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(){
      this.post.id = Date.now();
      this.$emit('create1', this.post);
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

</style>
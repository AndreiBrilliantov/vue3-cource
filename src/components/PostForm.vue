<template>
  <form @submit.prevent>
    <my-input
        v-focus
        v-model="post.title"
        type="text"
        placeholder="Title"
    />
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Body"
    />
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
  },
  watch: {
    post: {
      handler(newValue) {
        console.log(newValue)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

</style>
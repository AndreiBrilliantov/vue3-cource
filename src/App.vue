<template>
  <div class="app">
    <form @submit.prevent>
      <input
          v-bind:value="title"
          @input="inputTitle"
          class="input"
          type="text"
          placeholder="Title"
      >
      <input
          v-bind:value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          placeholder="Body"
      >
      <button class="btn" @click="createPost">Create</button>
    </form>
    <div class="post" v-for="post in posts">
      <div>Post Name: {{ post.title }}</div>
      <div>Post Description: {{ post.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'Post1', body: 'Body1'},
        {id: 2, title: 'Post2', body: 'Body2'},
        {id: 3, title: 'Post3', body: 'Body3'},
      ],
      title: '',
      body: '',
    }
  },
  methods: {
    createPost(){
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
    inputTitle(event){
      this.title = event.target.value;
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.post {
  padding: 5px;
  border: 2px solid teal;
  margin-top: 15px;
}
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
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 15px;
  color: teal;
  border: 1px solid teal;
  background: none;
}
</style>
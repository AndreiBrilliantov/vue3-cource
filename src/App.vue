<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
    />

  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Post1', body: 'Body1'},
        {id: 2, title: 'Post2', body: 'Body2'},
        {id: 3, title: 'Post3', body: 'Body3'},
      ],
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
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


</style>
<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button
        @click="showDialog"
    >
      Создать пост
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create1="createPost"
      />
    </my-dialog>

    <post-list
        :posts="posts"
        @removePost="removePost"

        :listHeader="listHeader"
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
      dialogVisible: false,

      listHeader: {listTitle: 'Название поста', listbody: 'Описание'},
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !==post.id)
    },
    showDialog(){
      this.dialogVisible = true;
    }

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
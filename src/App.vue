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
        v-if="!isPostsLoading"

        :listHeader="listHeader"
    />
    <div v-else >Идет загрузка</div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,

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
    },
    async fetchPosts() {
        try {
          this.isPostsLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;

        } catch (e){
          alert('Error!')
        } finally {
          this.isPostsLoading = false;
        }
    },


  },
  mounted() {
    this.fetchPosts();
  },
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
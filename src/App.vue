<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Создать пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create1="createPost"
      />
    </my-dialog>
<!--  Для watch функции использовать :posts="posts"  -->
    <post-list
        :posts="sortedPosts"
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
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ],

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
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort] ?.localeCompare(post2[this.selectedSort])
      })
    }
  },
  watch: {
    // selectedSort(newValue){
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue] ?.localeCompare(post2[newValue])
    //   })
    // }
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
.app__btns {
  display: flex;
  justify-content: space-between;
}

</style>
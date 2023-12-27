<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
    placeholder="Поиск по заголовку поста"
    />
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
        :posts="sortedAndSearchedPosts"
        @removePost="removePost"
        v-if="!isPostsLoading"

        :listHeader="listHeader"
    />
    <div v-else >Идет загрузка</div>
    <my-pagination-by-page
      v-model:page = page
      :totalPages = totalPages
      :limit = limit
    />
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
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(Number(response.headers['x-total-count']) / this.limit);
          this.posts = response.data;

        } catch (e){
          alert('Error!')
        } finally {
          this.isPostsLoading = false;
        }
    }


  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort] ?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    page() {
      this.fetchPosts();
    },
    // selectedSort(newValue){
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue] ?.localeCompare(post2[newValue])
    //   })
    // }
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
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

</style>
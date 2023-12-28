<template>
  <div>
    <h1>Страница с постами (with store)</h1>
    <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск по заголовку поста"
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Создать пост
      </my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>
<!--    <my-pagination-by-page-->
<!--        v-model:page = page-->
<!--        :totalPages = totalPages-->
<!--        :limit = limit-->
<!--    />-->
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

    <div v-intersection="loadMorePosts" class="observer">

    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort"
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
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

  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,

      listHeader: state => state.post.listHeader,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts"
    })
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
    // selectedSort(newValue){
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue] ?.localeCompare(post2[newValue])
    //   })
    // }
  },

}
</script>

<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.observer {
  height: 30px;
  background: teal;
}
</style>
<template>
  <div v-if="posts.length > 0">
    <h3>Useres list</h3>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('removePost', post)"

        :listTitle = "listHeader.listTitle"
        :listBody = "listHeader.listbody"
    />
  </div>
  <h2 v-else style="color:red">Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    },
    listHeader:{
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>

</style>
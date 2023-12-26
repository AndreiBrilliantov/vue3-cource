<template>
  <div>
    <h3>Useres list</h3>
    <post-item
        v-for="post in posts"
        :post="post"
        :listTitle = "listHeader.listTitle"
        :listBody = "listHeader.listbody"
    />
  </div>

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